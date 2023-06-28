import { useState } from "react";
import { WishlistItem } from "../../../mock-tool/Product";
import UiWidget from "../../library/ui-widget/UiWidget";
import UiList from "../../library/UiList";
import UiListItemImage from "../../library/UiListItemImage";
import { UiName } from "../../library/ui-section/UiSection";
import AddToCart from "./AddToCart";

export default function WishlistPage() {
  const [wishListItems, setWishListItems] = useState<Array<WishlistItem>>([
    {
      productView: "src/images/oak_truffle.jpeg",
      productName: "Cottage Oak Truffle",
      price: 180,
      inCart: false,
    },
    {
      productView: "src/images/oak_truffle.jpeg",
      productName: "Cottage Oak Natural",
      price: 300,
      inCart: false,
    },
  ]);

  return (
    <div className="container d-flex flex-column justify-content-start align-items-center">
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
    </div>
  );
}
