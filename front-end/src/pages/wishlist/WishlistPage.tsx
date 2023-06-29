import { useEffect, useState } from "react";
import { WishlistItem } from "../../../mock-tool/Product";
import UiWidget from "../../library/ui-widget/UiWidget";
import UiList from "../../library/UiList";
import UiListItemImage from "../../library/UiListItemImage";
import { UiName } from "../../library/ui-section/UiSection";
import AddToCart from "./AddToCart";
import NoItemsPlaceholder from "../../library/NoItemsPlaceholder";
import { ItemsPlacement } from "../../../mock-tool/enums/ItemsPlacement";

export default function WishlistPage() {
  const [wishListItems, setWishListItems] = useState<Array<WishlistItem>>([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((products) =>
        setWishListItems(products.filter((item) => item.inWishList))
      );
  });

  return (
    <div className="container d-flex flex-column justify-content-start align-items-center">
      {!!wishListItems.length ? (
        <UiList>
          {wishListItems.map((item, index) => (
            <UiWidget key={index}>
              <UiListItemImage
                imageSrc={item.productView}
                imageAlt={item.productName}
              ></UiListItemImage>
              <UiName item={item} />
              <AddToCart isAdded={item.inCart} />
            </UiWidget>
          ))}
        </UiList>
      ) : (
        <NoItemsPlaceholder itemsPlacement={ItemsPlacement.Wishlist} />
      )}
    </div>
  );
}
