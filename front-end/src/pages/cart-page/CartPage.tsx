import { useState } from "react";
import { ProductItem } from "../../../mock-tool/Product";
import UiList from "../../library/UiList";
import UiWidget from "../../library/ui-widget/UiWidget";
import AddToCart from "../wishlist/AddToCart";
import NoItemsPlaceholder from "../../library/NoItemsPlaceholder";
import { ItemsPlacement } from "../../../mock-tool/enums/ItemsPlacement";

export default function CartPage() {
  const [cartItems, setCartItems] = useState<Array<ProductItem>>([]);

  return (
    <div className="container d-flex flex-column justify-content-start align-items-center">
      {!!cartItems.length ? (
        <UiList>
          {cartItems.map((cartItem) => (
            <UiWidget>
              <div className="container d-flex flex-row justify-content-between align-items-center">
                {cartItem.productName}
              </div>
              <AddToCart isAdded={cartItem.inCart} />
            </UiWidget>
          ))}
        </UiList>
      ) : (
        <NoItemsPlaceholder itemsPlacement={ItemsPlacement.ShoppingCart} />
      )}
    </div>
  );
}
