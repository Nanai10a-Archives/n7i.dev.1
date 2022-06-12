import type { NextPageWithLayout } from "pages/_app";

import { withBarLayout } from "components/bar";

const Page: NextPageWithLayout<unknown> = () => {
  return <main></main>;
};

Page.applyLayout = withBarLayout(<>pagename</>);

export default Page;
