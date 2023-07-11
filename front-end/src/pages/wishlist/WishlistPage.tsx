import UiWidget from "../../library/ui-widget/UiWidget";
import UiList from "../../library/UiList";
import UiListItemImage from "../../library/UiListItemImage";
import { UiName } from "../../library/UiSection";
import AddToCart from "./AddToCart";
import NoItemsPlaceholder from "../../library/NoItemsPlaceholder";
import { ItemsPlacement } from "../../../mock-tool/enums/ItemsPlacement";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../Api";

export default function WishlistPage() {
  const { data, isLoading } = useQuery(["products"], fetchProducts);

  if (isLoading) return <h2>Loading...</h2>;

  console.log("isLoading", isLoading, "items", data);
  return (
    <div className="container d-flex flex-column justify-content-start align-items-center">
      {!!data?.filter((item) => item.inWishList).length ? (
        <UiList>
          {data
            ?.filter((item) => item.inWishList)
            .map(
              (item, index) =>
                !item.inCart && (
                  <UiWidget key={index}>
                    <UiListItemImage product={item} wishListAction={true} />
                    <UiName item={item} />
                    <AddToCart item={item} />
                  </UiWidget>
                )
            )}
        </UiList>
      ) : (
        <NoItemsPlaceholder itemsPlacement={ItemsPlacement.Wishlist} />
      )}
    </div>
  );
}
