import ProductWidget from "../../common-components/ProductWidget";
import { ProductItem } from "../../../mock-tool/Product";
import { Like, LinkButton } from "../../actions/AppActions";
import UiListItemImage from "../../library/UiListItemImage";
import ProductInfo from "../../library/ProductInfo";

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
            <div className="link_to_details">
              <LinkButton linkTo={`/product/${product._id}/reviews`} />
            </div>
            <UiListItemImage
              imageSrc={product.productView}
              imageAlt={product.productName}
            />
            <Like />
            <ProductInfo product={product} />
          </ProductWidget>
        ))}
      </div>
    </>
  );
}
