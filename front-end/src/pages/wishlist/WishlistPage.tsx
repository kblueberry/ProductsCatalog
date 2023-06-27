import { useState } from "react";
import ProductWidget from "../../common-components/ProductWidget";
import { WishlistItem } from "../../../mock-tool/Product";
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
    <div className="container d-flex flex-row justify-content-start align-items-center">
      {wishListItems.map((item) => (
        <ProductWidget>
          <img
            className="w-100 h-100 py-3"
            src={item.productView}
            alt={item.productName}
          ></img>
          <p>{item.productName}</p>
          <p>${item.price}/qm</p>
          <AddToCart isAdded={item.inCart} />
        </ProductWidget>
      ))}
    </div>
  );
}
