import "../../library/ui-widget/UiWidget.scss";

export function WidgetDetails({ value }: { value: string | number }) {
  return (
    <div
      style={{
        flex: "1 0 178px",
      }}
    >
      <div className="d-flex flex-row align-items-center justify-between-content">
        <div className="available_count_marker rounded-circle bg-success"></div>
        <span className="p-1">Available, qm {value}</span>
      </div>
    </div>
  );
}
