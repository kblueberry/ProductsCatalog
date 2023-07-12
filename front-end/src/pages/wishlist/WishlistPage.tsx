import UiWidget from "../../library/ui-widget/UiWidget";
import UiList from "../../library/UiList";
import UiListItemImage from "../../library/UiListItemImage";
import { UiName } from "../../library/UiSection";
import AddToCart from "./AddToCart";
import NoItemsPlaceholder from "../../library/NoItemsPlaceholder";
import { ItemsPlacement } from "../../../mock-tool/enums/ItemsPlacement";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../Api";
import UiLoadingSpinner from "../../library/UiLoadingSpinner";
import { UiHttpError } from "../../library/UiHttpError";

export default function WishlistPage() {
  const { data, error, isLoading } = useQuery(["products"], fetchProducts);

  if (isLoading) return <UiLoadingSpinner />;
  if (error) {
    return <UiHttpError error={error} />;
  }

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
