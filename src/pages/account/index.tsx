import { useSession } from "next-auth/react";
import Page from "~/components/Page";
import { api } from "~/utils/api";
import { User, Account as AccountType } from "@prisma/client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";

export default function Account() {
    const [account, setAccount] = useState<AccountType | null | undefined>();
    const [user, setUser] = useState<User | null | undefined>();

    const { data: sessionData } = useSession();
    const { data: userData } = api.user.get.useQuery(undefined, {
        enabled: sessionData?.user !== undefined,
    });
    const { data: accountData } = api.account.get.useQuery(undefined, {
        enabled: sessionData?.user !== undefined,
    });

    useEffect(() => {
        setAccount(accountData);
        setUser(userData);
    }, [accountData, userData]);

    return (
        <Page isSecurePage isLoading={false}>
            <div className="container mx-auto h-screen bg-[#262626] px-4 pt-20 pb-20 ">
                <div className="mx-3 flex flex-col items-center">
                    <div className="pb-10 text-5xl">Account</div>
                    {user?.image ? (
                        <img
                            src={user?.image}
                            alt="Image"
                            width={200}
                            height={200}
                        ></img>
                    ) : null}
                    <div className="pt-16">
                        <div className="flex flex-col pb-3">
                            <label>Username:</label>
                            <span className="text-2xl">{user?.name}</span>
                        </div>
                        <div className="flex flex-col pb-3">
                            <label>E-Mail:</label>
                            <span className="text-2xl">{user?.email}</span>
                        </div>
                    </div>
                    <div className="m-auto flex flex-row justify-center  py-12">
                        <span className="text-2xl">logged in with&nbsp;</span>
                        <span className="text-2xl text-accent">
                            <Link href={`https://github.com/${user?.name}`}>
                                {account?.provider}
                            </Link>
                        </span>
                    </div>
                    <button
                        className="btn-primary btn"
                        onClick={() => signOut()}
                    >
                        sign Out
                    </button>
                </div>
            </div>
        </Page>
    );
}
