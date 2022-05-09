import type { DocumentProps } from "next/document";
import type { FC } from "react";

import { Html, Head, Main, NextScript } from "next/document";

const Document: FC<DocumentProps> = () => (
  <Html>
    <Head>
      {/* import fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Poiret+One&family=Zen+Kaku+Gothic+New&display=swap"
        rel="stylesheet"
      />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
