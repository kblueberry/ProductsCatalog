import UiList from "../../../library/UiList";
import UiWidget from "../../../library/ui-widget/UiWidget";
import UiListItemImage from "../../../library/UiListItemImage";
import ProductDescription from "../ProductDescription";
import "./ProductsPage.scss";
import UILink from "../../../library/UILink";
import { ActionNames } from "../../../../mock-tool/ConstantsConfig";
import { LinkButtonStyles } from "../../../../mock-tool/enums/LinkButtonStyles";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../../Api";

export default function ProductsPage() {
  const productsQuery = useQuery(["products"], fetchProducts);

  if (productsQuery.isLoading) {
    return <h2>Loading...</h2>;
  }
  if (productsQuery.isError) {
    return <h2>There was an error fetching products</h2>;
  }
  console.log(
    "is loading",
    productsQuery.isLoading,
    "is fetching",
    productsQuery.isFetching
  );

  return (
    <div className="container d-flex flex-column justify-content-start align-items-center">
      <h5 className="h5 text-secondary fs-6">
        The innovation leader in vinyl floor
      </h5>
      <h1 className="h1 display-5 fs-2">Let's Get Started</h1>
      <UiList>
        {productsQuery.data.map((product) => (
          <UiWidget key={product.productName}>
            <div className="link_to_details">
              <UILink
                pageLink={`/product/${product._id}/reviews`}
                fontStyles={LinkButtonStyles.ImageCoverLink}
              >
                {ActionNames.linkTo + "product"}
              </UILink>
            </div>
            <UiListItemImage product={product} wishListAction={true} />
            <ProductDescription product={product} />
          </UiWidget>
        ))}
      </UiList>
    </div>
  );
}
