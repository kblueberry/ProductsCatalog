import { useEffect, useState } from "react";
import { ProductItem } from "../../../../mock-tool/Product";
import UiList from "../../../library/UiList";
import UiWidget from "../../../library/ui-widget/UiWidget";
import UiListItemImage from "../../../library/UiListItemImage";
import ProductDescription from "../ProductDescription";
import "./ProductsPage.scss";
import Like from "../../../library/ui-buttons/Like";
import UILink from "../../../library/UILink";
import { ActionNames } from "../../../../mock-tool/ConstantsConfig";
import { LinkButtonStyles } from "../../../../mock-tool/enums/LinkButtonStyles";

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
              <UILink
                pageLink={`/product/${product._id}/reviews`}
                fontStyles={LinkButtonStyles.ImageCoverLink}
              >
                {ActionNames.linkTo + "product"}
              </UILink>
            </div>
            <UiListItemImage
              imageSrc={product.productView}
              imageAlt={product.productName}
            />
            <Like item={product} />
            <ProductDescription product={product} />
          </UiWidget>
        ))}
      </UiList>
    </div>
  );
}
