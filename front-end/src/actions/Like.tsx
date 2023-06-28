import { ProductItem } from "../../mock-tool/Product";
import { useState } from "react";
import "./Like.scss";

export default function Like({ item }: { item: ProductItem }) {
  const [inWishList, setInWishList] = useState<boolean>(item.inWishList);

  const addToWishList = () => {
    item.inWishList = !item.inWishList;
    console.log("item is updating...", item);

    fetch(`http://localhost:3000/products/${item._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    })
      .then((response) => response.json())
      .then((likedItem) => {
        setInWishList(likedItem.inWishList);
      });
  };

  return (
    <div className="placement" onClick={addToWishList}>
      <div className="heart">
        <svg
          className={inWishList ? "added_to_wishlist" : "not_added_to_wishlist"}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <title>heart</title>
            <path d="M0.256 12.16q0.544 2.080 2.080 3.616l13.664 14.144 13.664-14.144q1.536-1.536 2.080-3.616t0-4.128-2.080-3.584-3.584-2.080-4.16 0-3.584 2.080l-2.336 2.816-2.336-2.816q-1.536-1.536-3.584-2.080t-4.128 0-3.616 2.080-2.080 3.584 0 4.128z"></path>
          </g>
        </svg>
      </div>
    </div>
  );
}
