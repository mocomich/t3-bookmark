import { Layout } from "@/components/layout/Layout";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import type { AppType } from "next/app";
import { useEffect, useState } from "react";

import "../styles/globals.css";
import { trpc } from "../utils/trpc";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const [isSSR, setIsSSR] = useState(false);

  useEffect(() => {
    setIsSSR(true);
  }, []);

  return (
    <SessionProvider session={session}>
      {/* TODO: getLayoutに切り替える */}
      <Layout>{isSSR && <Component {...pageProps} />}</Layout>
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
