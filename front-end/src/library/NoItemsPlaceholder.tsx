export default function NoItemsPlaceholder({
  itemsPlacement,
}: {
  itemsPlacement: string;
}) {
  return (
    <p className="fs-4 fw-semibold">There are no items in {itemsPlacement}</p>
  );
}
