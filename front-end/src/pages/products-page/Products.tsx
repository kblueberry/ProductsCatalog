import ProductWidget, {
  ProductDetails,
} from "../../common-components/ProductWidget";
import { ProductItem } from "../../../mock-tool/Product";
import { CheckBoxAction, Like, LinkButton } from "../../actions/AppActions";

export default function Products({
  products,
}: {
  products: Array<ProductItem>;
}) {
  return (
    <>
      <div className="d-flex flex-wrap flex-row mx-auto">
        {products.map((product) => (
          <ProductWidget key={product.productName}>
            <p className="link_to_details">
              <LinkButton linkTo={`/product/${product._id}/reviews`} />
            </p>
            <img
              className="w-100 h-100 py-3"
              src={product.productView}
              alt={product.productName}
            ></img>
            <Like />
            <div className="d-flex flex-column w-100 mb-2">
              <div className="d-flex flex-row flex-wrap justify-content-between">
                <ProductDetails
                  value={product.productName}
                  isAvailable={false}
                  setClass="flex-grow-1 flex-shrink-1"
                />
                <ProductDetails
                  value={product.priceLevel}
                  isAvailable={false}
                  setClass="flex-grow-0 flex-shrink-0 ml-auto"
                />
              </div>
              <ProductDetails
                value={product.productBrand}
                isAvailable={false}
                setClass="details_label_medium"
              />
              <div className="d-flex flex-row flex-wrap justify-content-between">
                <ProductDetails
                  value={product.availabilityQmCount}
                  isAvailable={true}
                  setClass="detail_label_small"
                />
                <CheckBoxAction />
              </div>
            </div>
          </ProductWidget>
        ))}
      </div>
    </>
  );
}
