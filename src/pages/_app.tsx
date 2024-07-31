import "../styles/globals.css";
import type { AppProps } from "next/app";
import reportA11y from "../../a11yreporting";
import React from "react";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

reportA11y(React);

export default App;
