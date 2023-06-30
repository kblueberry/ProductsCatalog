import { ReactNode } from "react";

export default function UiSection({ children }: { children: ReactNode }) {
  return <div className="container-flex">{children}</div>;
}

export function UiName({ item }: { item: any }) {
  return (
    <>
      <b>{item.productName}</b>
      <p>${item.price}/qm</p>
    </>
  );
}
