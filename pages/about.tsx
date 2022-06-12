import type { NextPageWithLayout } from "pages/_app";

import { withBarLayout } from "components/bar";
import Colored from "components/colored";

const Page: NextPageWithLayout<unknown> = () => (
  <main className="flex flex-col items-center">
    <span>
      I{"'"}m a{" "}
      <Colored className="italic" color="prim">
        maker
      </Colored>
      .
    </span>
    <span>
      have writing code since <Colored color="prim">2020</Colored>.
    </span>
  </main>
);

Page.applyLayout = withBarLayout(<>about</>, { href: "/", name: "Home" });

export default Page;
