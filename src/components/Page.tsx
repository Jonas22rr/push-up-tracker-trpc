import { api } from "~/utils/api";
import { signIn, getSession } from "next-auth/react";
import { Header } from "~/components/Header";
import Loading from "./Loading";
import { useCallback, useEffect, useState } from "react";
import { useRouter, NextRouter } from "next/router";
import Head from "next/head";
import NavBar from "./NavBar";

export default function Page({
  isSecurePage = false,
  isLoading = true,
  children,
}: {
  isSecurePage?: boolean;
  isLoading?: boolean;
  children: React.ReactNode;
}) {
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const checkUser = async () => {
    const session = await getSession();
    if (session === null) {
      await signIn();
      checkUser();
    } else {
      setIsAuthorized(true);
    }
  };

  useEffect(() => {
    if (!isSecurePage) {
      setIsAuthorized(true);
    } else {
      checkUser();
    }
    isLoading ? setLoading(true) : setLoading(false);
  }, [isLoading, isSecurePage]);

  return (
    <>
      <Head>
        <title>Push-up Tracker</title>
      </Head>
      {loading ? (
        <Loading />
      ) : isAuthorized ? (
        <div>
          {children}
          <NavBar />
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
