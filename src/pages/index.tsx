import Add from "~/components/Add/AddCard";
import NavBar from "~/components/NavBar";
import Page from "~/components/Page";
import History from "~/components/History/HistoryCard";
import Sum from "~/components/Sum";
import { useSession } from "next-auth/react";
import { api } from "~/utils/api";

export default function Home() {
    const { data: sessionData } = useSession();
    const { data: pushUps, isLoading } = api.pushUps.getAll.useQuery(
        undefined,
        {
            enabled: sessionData?.user !== undefined,
        }
    );

    return (
        <Page isSecurePage isLoading={isLoading}>
            <div className="container mx-auto ">
                <div className="flex place-content-center">
                    <div className="flex w-3/4 flex-col space-y-10">
                        <div className="pt-10 text-center">
                            <span className=" text-5xl">Push-up </span>
                        </div>
                        <Add />
                        <History />
                        <Sum data={pushUps} />
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
        </Page>
    );
}
