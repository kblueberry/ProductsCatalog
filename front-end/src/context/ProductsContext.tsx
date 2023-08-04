import { createContext, ReactNode, useEffect, useState } from "react";
import { ProductItem } from "../../mock-tool/Product";
import { PageObject } from "../../mock-tool/PageObject";

type ProductsState = {
  products: PageObject<ProductItem>;
  isLoading: boolean;
  error?: Error;
};

const initialProductsState = {
  data: [],
  limit: null,
  total: null,
  currentPage: null,
};

export const ProductsContext = createContext<ProductsState>({
  products: initialProductsState,
  isLoading: true,
  error: null,
});

export function ProductsContextProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<ProductsState>({
    products: initialProductsState,
    isLoading: false,
    error: null,
  });

  useEffect(() => {
    setProducts({
      products: initialProductsState,
      isLoading: true,
      error: null,
    });

    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((productsPage: PageObject<ProductItem>) => {
        productsPage.data = products.products.data.concat(productsPage.data);
        setProducts({
          products: productsPage,
          isLoading: false,
          error: null,
        });
      })
      .catch((error) => setProducts((prevState) => ({ ...prevState, error })));
  }, []);

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
}
