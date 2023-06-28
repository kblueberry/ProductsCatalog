import { ActionNames } from "../../../mock-tool/ConstantsConfig";
import { useState } from "react";
import { RemoveShoppingCart, ShoppingCart } from "@mui/icons-material";

export default function AddToCart({ isAdded }: { isAdded: boolean }) {
  const [isAddedState, setIsAddedState] = useState<boolean>(isAdded);

  return (
    <button
      className={`btn ${
        !isAddedState ? "btn-outline-primary" : "btn-outline-danger"
      }`}
      onClick={() => setIsAddedState(!isAddedState)}
    >
      {!isAddedState ? <ShoppingCart /> : <RemoveShoppingCart />}
      {!isAddedState ? ActionNames.addToCart : ActionNames.removeFromCart}
    </button>
  );
}
