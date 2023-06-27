import { useState } from "react";
import ProductWidget from "../../common-components/ProductWidget";
import { WishlistItem } from "../../../mock-tool/Product";
import AddToCart from "./AddToCart";
import UiListItemImage from "../../library/UiListItemImage";

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
    <div className="container d-flex flex-row justify-content-start align-items-center">
      {wishListItems.map((item, index) => (
        <ProductWidget key={index}>
          <UiListItemImage
            imageSrc={item.productView}
            imageAlt={item.productName}
          ></UiListItemImage>
          <b>{item.productName}</b>
          <p>${item.price}/qm</p>
          <AddToCart isAdded={item.inCart} />
        </ProductWidget>
      ))}
    </div>
  );
}
