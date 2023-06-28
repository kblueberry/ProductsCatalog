import "../../library/ui-widget/UiWidget.scss";

export function DescriptionItemMarkered({ value }: { value: string | number }) {
  return (
    <div
      className="d-flex flex-row align-items-center justify-between-content"
      style={{
        flex: "1 0 178px",
      }}
    >
      <div className="available_count_marker rounded-circle bg-success"></div>
      <span className="p-1">Available, qm {value}</span>
    </div>
  );
}
