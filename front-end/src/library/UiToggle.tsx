export default function UiToggle({
  isToggled,
  actionName,
  className = "",
}: {
  isToggled: Function;
  actionName: string;
  className?: string;
}) {
  return (
    <button
      className={`btn text-decoration-underline text-uppercase fw-bold p-0 ${className}`}
      onClick={() => isToggled()}
    >
      {actionName}
    </button>
  );
}
