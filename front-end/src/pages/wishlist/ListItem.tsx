import "./ListItem.scss";

export default function ListItem({ item }: { item: any }) {
  return (
    <div className="container mx-auto">
      <div className="product_row py-3 px-4 border border-secondary-subtle rounded-4">
        <div className="product_name">
          <h5>H1</h5>
          <p>Description</p>
        </div>
        <p className="product_price">Total:</p>
        <svg
          className="product_remove"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z" />
        </svg>
      </div>
    </div>
  );
}
