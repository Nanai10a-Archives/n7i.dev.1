import type { NextPageWithLayout } from "pages/_app";
import type { IconifyIcon } from "@iconify/react";

import Link from "next/link";
import { Icon } from "@iconify/react";

import { withBarLayout } from "components/bar";

import github from "@iconify/icons-simple-icons/github";

const contacts: Array<{ icon: IconifyIcon; href: string; text: string }> = [
  { icon: github, href: "https://github.com/Nanai10a", text: "github.com/Nanai10a" },
];

const Page: NextPageWithLayout<unknown> = () => (
  <main className="flex flex-col items-center">
    <ul>
      {contacts.map(({ icon, href, text }, i) => (
        <li className="flex" key={i}>
          <Icon icon={icon} />
          <span className="mx-2" />
          <Link href={href}>{text}</Link>
        </li>
      ))}
    </ul>
  </main>
);

Page.applyLayout = withBarLayout(<>contact</>);

export default Page;
