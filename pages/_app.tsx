import type { AppProps } from "next/app";
import type { NextPage } from "next";
import type { FC } from "react";

import { ThemeProvider } from "next-themes";

import "styles/globals.css";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  applyLayout?: (page: JSX.Element) => JSX.Element;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App: FC<AppPropsWithLayout> = ({ Component, pageProps }) =>
  (Component.applyLayout ?? ((c) => c))(
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>,
  );

export default App;
