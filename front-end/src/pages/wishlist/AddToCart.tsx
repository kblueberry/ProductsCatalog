import { ActionNames } from "../../../mock-tool/ConstantsConfig";
import { useCallback } from "react";
import { RemoveShoppingCart, ShoppingCart } from "@mui/icons-material";
import { ProductItem } from "../../../mock-tool/Product";
import { useDispatch, useSelector } from "react-redux";
import { ProductsState } from "../../store/dto/ProductsState";
import { actionType } from "../../store/Helper";
import { ProductsCollection } from "../../store/dto/StateEnums";

export default function AddToCart({ item }: { item: ProductItem }) {
  const dispatch = useDispatch();
  const cartsItems = useSelector<ProductsState, ProductsState["cartItems"]>(
    (state) => state.cartItems
  );

  const updateCartState = useCallback(() => {
    const type = actionType(cartsItems, item._id);

    dispatch({
      type,
      payload: {
        value: item._id,
        collection: {
          name: ProductsCollection.Wishlist,
          content: cartsItems,
        },
      },
    });
  }, [item, cartsItems]);

  return (
    <button
      className={`btn ${
        !cartsItems.includes(item._id)
          ? "btn-outline-primary"
          : "btn-outline-danger"
      }`}
      onClick={updateCartState}
    >
      {!cartsItems.includes(item._id) ? (
        <ShoppingCart />
      ) : (
        <RemoveShoppingCart />
      )}
      {!cartsItems.includes(item._id)
        ? ActionNames.addToCart
        : ActionNames.removeFromCart}
    </button>
  );
}
