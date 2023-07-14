import UiList from "../../library/UiList";
import UiWidget from "../../library/ui-widget/UiWidget";
import UILink from "../../library/UILink";
import { LinkButtonStyles } from "../../../mock-tool/enums/LinkButtonStyles";
import { ActionNames } from "../../../mock-tool/ConstantsConfig";
import UiListItemImage from "../../library/UiListItemImage";
import ProductDescription from "./ProductDescription";
import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import { UiHttpError } from "../../library/UiHttpError";
import UiLoadingSpinner from "../../library/UiLoadingSpinner";

export default function ProductsList() {
  const data = useContext(ProductsContext);

  if (data.isLoading) {
    return <UiLoadingSpinner />;
  }
  if (data.error) {
    return <UiHttpError error={data.error} />;
  }

  return (
    <UiList>
      {data.products.map((product) => (
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
  );
}
