## Next.js X @endo/init

This repository demonstrates the integration of Endo and Knit within a Next.js application. 

Below you can view contents of the project's [_document.js](./pages/_document.js) file. 
```js
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
```

The key component within this file is the [Next.js specific <Script /> element](https://nextjs.org/docs/pages/api-reference/components/script) as it is responsible for loading `@endo/init`. When used outside of Next.js' `_document.js` file, this component has been the source of issues when loading the page such as the one seen [here](https://github.com/agoric-labs/hardened-create-cosmos-app?tab=readme-ov-file#overview).
