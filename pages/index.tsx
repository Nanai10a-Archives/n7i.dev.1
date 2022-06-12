import type { NextPageWithLayout } from "pages/_app";

import Link from "next/link";

import { withBarLayout } from "components/bar";
import Colored from "components/colored";

const routes: Array<{ href: string; text: string }> = [
  { href: "/about", text: "about" },
  { href: "/history", text: "history" },
  { href: "/skill", text: "skill" },
  { href: "/gallery", text: "gallery" },
  { href: "/contact", text: "contact" },
];

const Page: NextPageWithLayout<unknown> = () => (
  <main>
    <ul>
      {routes.map((ln, i) => (
        <li className="flex flex-col content-center" key={i}>
          <Link href={ln.href}>
            <a className="m-1.5 place-self-center">{ln.text}</a>
          </Link>
        </li>
      ))}
    </ul>
  </main>
);

Page.applyLayout = withBarLayout(
  <>
    n<Colored color="prim">7</Colored>i.dev
  </>,
);

export default Page;
