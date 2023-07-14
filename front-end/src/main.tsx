import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ProductsPage from "./pages/products-page/products-page/ProductsPage";
import ReviewsPage from "./pages/reviews-page/ReviewsPage";
import Sidebar from "./sidebar/Sidebar";
import WishlistPage from "./pages/wishlist/WishlistPage";
import CartPage from "./pages/cart-page/CartPage";
import { Provider } from "react-redux";
import { store } from "./store/Store";
import { ProductsContextProvider } from "./context/ProductsContext";

const AppLayout = () => {
  return (
    <>
      <Sidebar />
      <div className="top-indent-container">
        <Outlet></Outlet>
      </div>
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <ProductsPage />,
      },
      {
        path: "/product/:id/reviews",
        element: <ReviewsPage />,
      },
      {
        path: "/wishlist",
        element: <WishlistPage />,
      },
      {
        path: "/shopping-cart",
        element: <CartPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <ProductsContextProvider>
      <RouterProvider router={router} />
    </ProductsContextProvider>
  </Provider>
);
