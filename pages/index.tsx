import type { NextPageWithLayout } from "pages/_app";

import Link from "next/link";

import { withBarLayout } from "components/bar";

const links: Array<{ href: string; text: string }> = [
  { href: "/about", text: "about" },
  { href: "/history", text: "history" },
  { href: "/skill", text: "skill" },
  { href: "/gallery", text: "gallery" },
  { href: "/contact", text: "contact" },
];

const Page: NextPageWithLayout<unknown> = () => {
  return (
    <main>
      <ul>
        {links.map((ln) => (
          <li className="flex flex-col content-center">
            <Link href={ln.href}>
              <a className="m-1.5 place-self-center">{ln.text}</a>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

Page.applyLayout = withBarLayout(
  <>
    n<span className="text-priml dark:text-primd">7</span>i.dev
  </>,
);

export default Page;
