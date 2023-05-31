import { useEffect, useState } from "react";
import Products from "./Products";
import { ProductItem } from "../mock-tool/Product";

export default function MainContent() {
  const [products, setProducts] = useState<Array<ProductItem>>([]);

  const fetchProducts = () => {
    fetch("http://localhost:3000/products")
        .then(res => res.json())
        .then(products => setProducts(products));
  };

  useEffect(() => {
    fetchProducts();
  });

  return <div>
    <div className="container text-center">
      <h5 className="h5 text-secondary fs-6">The innovation leader in vinyl floor</h5>
      <h1 className="h1 display-5 fs-2">Let's Get Started</h1>
    </div>
    <Products products={products}/>
  </div>
}
