import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import Head from "next/head";
import { ClerkProvider } from "@clerk/nextjs";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Gian's Taekwondo</title>
        <meta name="description" content="This is the official website of Gian's Taekwondo Gym" />
        <link rel="shortcut icon" href="test.png" type="image/x-icon" />
      </Head>
      
      <ClerkProvider {...pageProps}>
        <Component {...pageProps} />
      </ClerkProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
