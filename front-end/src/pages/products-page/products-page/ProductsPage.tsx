import "./ProductsPage.scss";
import { ProductsContextProvider } from "../../../ProductsContext";
import ProductsList from "../ProductsList";

export default function ProductsPage() {
  return (
    <div className="container d-flex flex-column justify-content-start align-items-center">
      <h5 className="h5 text-secondary fs-6">
        The innovation leader in vinyl floor
      </h5>
      <h1 className="h1 display-5 fs-2">Let's Get Started</h1>
      <ProductsContextProvider>
        <ProductsList />
      </ProductsContextProvider>
    </div>
  );
}
