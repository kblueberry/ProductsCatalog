import { WidgetDetails } from "./WidgetDetails";
import { CheckBoxAction } from "../../actions/AppActions";
import { ProductItem } from "../../../mock-tool/Product";
import UiSection, { UiName } from "../../library/ui-section/UiSection";

export default function ProductDescription({
  product,
}: {
  product: ProductItem;
}) {
  return (
    <>
      <div className="d-flex flex-column w-100 mb-2">
        <UiName item={product} />
        <p>{product.productBrand}</p>
        <UiSection>
          <WidgetDetails value={product.availabilityQmCount} />
          <CheckBoxAction />
        </UiSection>
      </div>
    </>
  );
}
