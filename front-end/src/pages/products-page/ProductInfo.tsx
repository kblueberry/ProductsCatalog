import { WidgetDetails } from "./WidgetDetails";
import { CheckBoxAction } from "../../actions/AppActions";
import { ProductItem } from "../../../mock-tool/Product";

export default function ProductInfo({ product }: { product: ProductItem }) {
  return (
    <div className="d-flex flex-column w-100 mb-2">
      <div className="d-flex flex-row flex-wrap justify-content-between">
        <WidgetDetails
          value={product.productName}
          isAvailable={false}
          setClass="flex-grow-1 flex-shrink-1"
        />
        <WidgetDetails
          value={product.priceLevel}
          isAvailable={false}
          setClass="flex-grow-0 flex-shrink-0 ml-auto"
        />
      </div>
      <WidgetDetails
        value={product.productBrand}
        isAvailable={false}
        setClass="details_label_medium"
      />
      <div className="d-flex flex-row flex-wrap justify-content-between">
        <WidgetDetails
          value={product.availabilityQmCount}
          isAvailable={true}
          setClass="detail_label_small"
        />
        <CheckBoxAction />
      </div>
    </div>
  );
}
