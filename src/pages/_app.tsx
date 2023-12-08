import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";

import { api } from "~/utils/api";
import Head from "next/head";

import "~/styles/globals.css";
import { SideNav } from "~/components/SideNav";
import '../styles/signup.css'

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>BoulderBook</title>
        <meta
          name="description"
          content="This is a Facebook Clone by Julia Kim">
        </meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="masterctn mx-auto flex items-start sm:pr-4">
        <SideNav />
        <div className="min-h-screen flex-grow border-x">
          <Component {...pageProps} />
        </div>
      </div>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
