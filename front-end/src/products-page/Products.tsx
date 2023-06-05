import ProductWidget from "./ProductWidget";
import { ProductItem } from "../../mock-tool/Product";

export default function Products({products}: {products: Array<ProductItem>}) {
  return <div className="container mx-auto">
    <div className="row row-cols-3">
      {products.map(product => (
          <ProductWidget key={product.productName} item={product}/>
      ))}
    </div>
  </div>
}