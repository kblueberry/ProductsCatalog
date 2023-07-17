import { ProductItem } from "../../../mock-tool/Product";
import { useCallback } from "react";
import "./Like.scss";
import { useDispatch, useSelector } from "react-redux";
import { ProductsState } from "../../store/dto/ProductsState";
import { ActionTypes, ProductsCollection } from "../../store/dto/StateEnums";

export default function Like({ item }: { item: ProductItem }) {
  const dispatch = useDispatch();

  const wishlistItems = useSelector<
    ProductsState,
    ProductsState["wishlistItems"]
  >((state) => state.wishlistItems);

  const updateItemWishlistState = useCallback(() => {
    const type = wishlistItems.includes(item._id)
      ? ActionTypes.Remove
      : ActionTypes.Add;

    dispatch({
      type,
      payload: {
        value: item._id,
        collection: {
          name: ProductsCollection.Wishlist,
          content: wishlistItems,
        },
      },
    });
  }, [item, wishlistItems]);

  return (
    <div className="placement" onClick={updateItemWishlistState}>
      <div className="heart">
        <svg
          className={
            wishlistItems.includes(item._id)
              ? "added_to_wishlist"
              : "not_added_to_wishlist"
          }
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
