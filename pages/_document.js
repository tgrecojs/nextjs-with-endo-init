import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script
          async
          type="module"
          src="https://esm.sh/@endo/init@1.0.2"
          strategy="beforeInteractive"
        />
      </body>
    </Html>
  );
}
