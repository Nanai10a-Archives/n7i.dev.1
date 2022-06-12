import type { PropsWithChildren, FC } from "react";

const Colored: FC<PropsWithChildren<{ className?: string; color: string }>> = ({
  children,
  className,
  color,
}) => <span className={`text-${color}l dark:text-${color}d ${className ?? ""}`}>{children}</span>;

export default Colored;
