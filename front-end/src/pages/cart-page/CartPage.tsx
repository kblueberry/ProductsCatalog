import UiList from "../../library/UiList";
import UiWidget from "../../library/ui-widget/UiWidget";
import AddToCart from "../wishlist/AddToCart";
import NoItemsPlaceholder from "../../library/NoItemsPlaceholder";
import { ItemsPlacement } from "../../../mock-tool/enums/ItemsPlacement";
import UiListItemImage from "../../library/UiListItemImage";
import styled from "styled-components";
import UiLoadingSpinner from "../../library/UiLoadingSpinner";
import { UiHttpError } from "../../library/UiHttpError";
import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import { useSelector } from "react-redux";
import { ProductsState } from "../../store/dto/ProductsState";

const StyledWidget = styled(UiWidget)`
  flex-direction: row;
  justify-content: space-between;
`;

const StyledList = styled(UiList)`
  flex-flow: column nowrap;
`;

const StyledImage = styled(UiListItemImage)`
  width: 30%;
  height: 30%;
`;

const StyledSpan = styled.span`
  flex: 1 0 20%;
  padding-left: 1.5rem;
`;

export default function CartPage() {
  const products = useContext(ProductsContext);
  const cartItems = useSelector<ProductsState, ProductsState["cartItems"]>(
    (state) => state.cartItems
  );

  if (products.isLoading) return <UiLoadingSpinner />;
  if (products.error) {
    return <UiHttpError error={products.error} />;
  }

  return (
    <div className="container d-flex flex-column justify-content-start align-items-center">
      {!!cartItems.length ? (
        <StyledList>
          {products.products
            .filter((item) => cartItems.includes(item._id))
            .map((cartItem) => (
              <StyledWidget key={cartItem._id}>
                <StyledImage product={cartItem} />
                <StyledSpan>{cartItem.productName}</StyledSpan>
                <div className="pe-2">
                  <AddToCart item={cartItem} />
                </div>
              </StyledWidget>
            ))}
        </StyledList>
      ) : (
        <NoItemsPlaceholder itemsPlacement={ItemsPlacement.ShoppingCart} />
      )}
    </div>
  );
}
