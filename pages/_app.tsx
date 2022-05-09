import type { AppProps } from "next/app";
import type { NextPage } from "next";
import type { FC } from "react";

import "styles/globals.css";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  applyLayout?: (page: JSX.Element) => JSX.Element;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App: FC<AppPropsWithLayout> = ({ Component, pageProps }) =>
  (Component.applyLayout ?? ((c) => c))(<Component {...pageProps} />);

export default App;
