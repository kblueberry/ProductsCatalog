import { useEffect, useState } from "react";
import { ProductItem } from "../../../../mock-tool/Product";
import UiList from "../../../library/UiList";
import UiWidget from "../../../library/ui-widget/UiWidget";
import { Like, LinkButton } from "../../../actions/AppActions";
import UiListItemImage from "../../../library/UiListItemImage";
import ProductDescription from "../ProductDescription";
import "./ProductsPage.scss";

export default function ProductsPage() {
  const [products, setProducts] = useState<Array<ProductItem>>([]);

  const fetchProducts = () => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((products) => setProducts(products));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container d-flex flex-column justify-content-start align-items-center">
      <h5 className="h5 text-secondary fs-6">
        The innovation leader in vinyl floor
      </h5>
      <h1 className="h1 display-5 fs-2">Let's Get Started</h1>
      <UiList>
        {products.map((product) => (
          <UiWidget key={product.productName}>
            <div className="link_to_details">
              <LinkButton linkTo={`/product/${product._id}/reviews`} />
            </div>
            <UiListItemImage
              imageSrc={product.productView}
              imageAlt={product.productName}
            />
            <Like />
            <ProductDescription product={product} />
          </UiWidget>
        ))}
      </UiList>
    </div>
  );
}
