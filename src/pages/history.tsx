import HistoryIndex from "../components/History/Index";
import { useEffect, useState } from "react";
import Page from "../components/Page";
import { api } from "~/utils/api";
import { PushUp } from "@prisma/client";
import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";

export default function History() {
    const [history, setHistory] = useState<PushUp[] | undefined>([]);
    const { data: sessionData } = useSession();
    const { data: pushUps, isLoading } = api.pushUps.getAll.useQuery(
        undefined,
        {
            enabled: sessionData?.user !== undefined,
        }
    );

    useEffect(() => {
        setHistory(pushUps);
    }, [pushUps]);

    return (
        <Page isSecurePage isLoading={isLoading}>
            {history ? (
                <HistoryIndex histories={history} />
            ) : (
                <p className="h-screen w-screen bg-[#262626] ">
                    very empty in here
                </p>
            )}
        </Page>
    );
}
