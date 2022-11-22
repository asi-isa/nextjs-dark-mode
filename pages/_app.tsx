import "../styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";

import setInitialThemeScript from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script id="initial-color-theme" strategy="beforeInteractive">
        {setInitialThemeScript}
      </Script>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
