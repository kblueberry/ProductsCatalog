import { createContext, ReactNode, useEffect, useState } from "react";
import { ProductItem } from "../../mock-tool/Product";

type ProductsState = {
  products: Array<ProductItem>;
  isLoading: boolean;
  error?: Error;
};

export const ProductsContext = createContext<ProductsState>({
  products: [],
  isLoading: true,
  error: null,
});

export function ProductsContextProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<ProductsState>({
    products: [],
    isLoading: false,
    error: null,
  });

  useEffect(() => {
    setProducts({ products: [], isLoading: true, error: null });

    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((products) =>
        setProducts({ products, isLoading: false, error: null })
      )
      .catch((error) => setProducts((prevState) => ({ ...prevState, error })));
  }, []);

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
}
