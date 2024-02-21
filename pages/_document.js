import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { isServer } from "../utils.js";

export default function Document() {
  console.log(isServer(globalThis));
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script
          type="module"
          src="https://esm.sh/@endo/init@1.0.2"
          strategy="afterInteractive"
        />
      </body>
    </Html>
  );
}
