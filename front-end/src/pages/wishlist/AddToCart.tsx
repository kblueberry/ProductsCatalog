import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { ActionNames } from "../../../mock-tool/ConstantsConfig";
import { useState } from "react";

export default function AddToCart({ isAdded }: { isAdded: boolean }) {
  const [isAddedState, setIsAddedState] = useState<boolean>(isAdded);

  return (
    <button
      className={`btn ${
        !isAddedState ? "btn-outline-primary" : "btn-outline-danger"
      }`}
      onClick={() => setIsAddedState(!isAddedState)}
    >
      {!isAddedState ? (
        <ShoppingCartIcon></ShoppingCartIcon>
      ) : (
        <RemoveShoppingCartIcon />
      )}
      {!isAddedState ? ActionNames.addToCart : ActionNames.removeFromCart}
    </button>
  );
}
