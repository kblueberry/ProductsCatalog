import { ReactNode } from "react";

export default function UiList({ children }: { children: ReactNode }) {
  return <div className="d-flex flex-wrap flex-row mx-auto">{children}</div>;
}
