import ProductWidget from "./ProductWidget";
import { ProductItem } from "../../../mock-tool/Product";

export default function Products({products}: {products: Array<ProductItem>}) {
  return <>
    <div className="d-flex flex-wrap flex-row mx-auto">
      {products.map(product => (
          <ProductWidget key={product.productName} item={product}/>
      ))}
    </div>
  </>
}