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
import UiLoadingSpinner from "../../../library/UiLoadingSpinner";

export default function ProductsPage() {
  const { data, error, isLoading } = useQuery(["products"], fetchProducts);

  if (isLoading) {
    return <UiLoadingSpinner />;
  }
  if (error) {
    return <h3>An error occurred: ${error.message}</h3>;
  }

  return (
    <div className="container d-flex flex-column justify-content-start align-items-center">
      <h5 className="h5 text-secondary fs-6">
        The innovation leader in vinyl floor
      </h5>
      <h1 className="h1 display-5 fs-2">Let's Get Started</h1>
      <UiList>
        {data.map((product) => (
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
