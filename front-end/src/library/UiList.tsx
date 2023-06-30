import { ReactNode } from "react";

export default function UiList({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`container-flex mx-auto ${className}`}>{children}</div>
  );
}
