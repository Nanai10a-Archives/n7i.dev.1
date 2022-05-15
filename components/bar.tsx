import type { FC, PropsWithChildren } from "react";
import type { NextPageWithLayout } from "pages/_app";

import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { useKey } from "react-keyboard-hooks";

const Bar: FC<PropsWithChildren<unknown>> = ({ children }) => (
  <header className="w-full mb-[2%] font-poi text-6xl md:text-7xl lg:text-8xl flex">
    <div className="w-[20%]" />
    <span className="p-2 w-full bg-on-sf-vartl dark:on-sf-vartd self-center">{children}</span>
  </header>
);

export default Bar;

const NavigateEsc: FC<PropsWithChildren<unknown>> = ({ children }) => (
  <p className="invisible md:visible mx-6 my-4 text-3xl">
    {!children ? (
      <>
        {/* FIXME: for styling, must delete. */}
        press <span className="text-priml dark:text-primd">Esc</span> to back to Home
      </>
    ) : (
      <>
        press <span className="text-priml dark:text-primd">Esc</span> to back to {children}
      </>
    )}
  </p>
);

export const withBarLayout =
  (
    children: JSX.Element,
    back?: { href: string; name: string },
  ): NextPageWithLayout["applyLayout"] =>
  (page) => {
    const { theme: _t, setTheme: _st } = useTheme();

    const router = useRouter();
    useKey("Escape", () => router.push(".."));

    return (
      <>
        <div className="h-32 md:h-44 flex justify-center">
          <NavigateEsc>{back?.name}</NavigateEsc>
        </div>
        <Bar>
          {children}
          {!back ? <></> : <Link href={back.href}>{back.name} →</Link>}
        </Bar>
        {page}
      </>
    );
  };
