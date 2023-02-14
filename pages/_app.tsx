import "../styles/globals.css";

import "../styles/Search.less";

import "antd-mobile/bundle/css-vars-patch.css";

import type { AppProps } from "next/app";

import Head from "next/head";

import VConsole from "vconsole";

function MyApp({ Component, pageProps }: AppProps) {
  // const vConsole = new VConsole();
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
