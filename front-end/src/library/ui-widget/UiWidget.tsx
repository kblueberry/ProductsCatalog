import { ReactNode } from "react";

export default function UiWidget({ children }: { children: ReactNode }) {
  return <div className="widget p-2">{children}</div>;
}
