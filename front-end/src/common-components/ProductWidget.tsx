import "./ProductWidget.scss";
import { ReactNode } from "react";

export default function ProductWidget({ children }: { children: ReactNode }) {
  return <div className="widget p-2">{children}</div>;
}

export function ProductDetails({
  value,
  isAvailable,
  setClass,
}: {
  value: string | number;
  isAvailable: boolean;
  setClass: string;
}) {
  const preString = isAvailable ? "Available, qm" : "";

  if (!preString) {
    return <span className={setClass}>{value}</span>;
  }
  return (
    <div
      style={{
        flex: "1 0 178px",
      }}
      className={setClass}
    >
      <div className="d-flex flex-row align-items-center justify-between-content">
        <div className="available_count_marker rounded-circle bg-success"></div>
        <span className="p-1">{preString}</span>
        <span>{value}</span>
      </div>
    </div>
  );
}
