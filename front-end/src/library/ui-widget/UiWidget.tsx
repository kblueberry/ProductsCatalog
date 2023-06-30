import { ReactNode } from "react";

export default function UiWidget({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`widget p-2 ${className}`}>{children}</div>;
}
