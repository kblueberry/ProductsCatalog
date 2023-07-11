import UiList from "../../library/UiList";
import UiWidget from "../../library/ui-widget/UiWidget";
import AddToCart from "../wishlist/AddToCart";
import NoItemsPlaceholder from "../../library/NoItemsPlaceholder";
import { ItemsPlacement } from "../../../mock-tool/enums/ItemsPlacement";
import UiListItemImage from "../../library/UiListItemImage";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../Api";

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
  const productsQuery = useQuery(["products"], fetchProducts);

  return (
    <div className="container d-flex flex-column justify-content-start align-items-center">
      {!!productsQuery.data?.length ? (
        <StyledList>
          {productsQuery.data.map((cartItem) => (
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
