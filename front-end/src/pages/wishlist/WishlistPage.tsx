import UiWidget from "../../library/ui-widget/UiWidget";
import UiList from "../../library/UiList";
import UiListItemImage from "../../library/UiListItemImage";
import { UiName } from "../../library/UiSection";
import AddToCart from "./AddToCart";
import NoItemsPlaceholder from "../../library/NoItemsPlaceholder";
import { ItemsPlacement } from "../../../mock-tool/enums/ItemsPlacement";
import UiLoadingSpinner from "../../library/UiLoadingSpinner";
import { UiHttpError } from "../../library/UiHttpError";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import { ProductsState } from "../../store/dto/ProductsState";

export default function WishlistPage() {
  const wishlistItems = useSelector<
    ProductsState,
    ProductsState["wishlistItems"]
  >((state) => state.wishlistItems);
  const products = useContext(ProductsContext);

  if (products.isLoading) return <UiLoadingSpinner />;
  if (products.error) {
    return <UiHttpError error={products.error} />;
  }

  return (
    <div className="container d-flex flex-column justify-content-start align-items-center">
      {!!wishlistItems.length ? (
        <UiList>
          {products.products
            .filter((product) => wishlistItems.includes(product._id))
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
