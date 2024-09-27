import "../styles/globals.css";
import type { AppProps } from "next/app";
import reportA11y from "../../a11yreporting";
import React from "react";
import Head from "next/head";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ShellScript 🐚 💖</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

reportA11y(React);

export default App;
