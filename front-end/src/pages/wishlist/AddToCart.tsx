import { ActionNames } from "../../../mock-tool/ConstantsConfig";
import { useState } from "react";
import { RemoveShoppingCart, ShoppingCart } from "@mui/icons-material";
import { ProductItem } from "../../../mock-tool/Product";

export default function AddToCart({ item }: { item: ProductItem }) {
  const [isAddedState, setIsAddedState] = useState<boolean>(item.inCart);

  const updateCartState = () => {
    item.inCart = !item.inCart;
    item.inWishList = !item.inCart;

    fetch(`http://localhost:3000/products/${item._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    })
      .then((response) => response.json())
      .then((updated) => setIsAddedState(updated.inCart));
  };

  return (
    <button
      className={`btn ${
        !isAddedState ? "btn-outline-primary" : "btn-outline-danger"
      }`}
      onClick={updateCartState}
    >
      {!isAddedState ? <ShoppingCart /> : <RemoveShoppingCart />}
      {!isAddedState ? ActionNames.addToCart : ActionNames.removeFromCart}
    </button>
  );
}
