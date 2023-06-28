import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ProductsPage from "./pages/products-page/products-page/ProductsPage";
import ReviewsPage from "./pages/reviews-page/ReviewsPage";
import Sidebar from "./sidebar/Sidebar";
import WishlistPage from "./pages/wishlist/WishlistPage";

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
        path: "/card",
        element: <></>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
