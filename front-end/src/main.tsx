import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ProductsPage from "./pages/products-page/products-page/ProductsPage";
import ReviewsPage from "./pages/reviews-page/ReviewsPage";
import Sidebar from "./sidebar/Sidebar";
import WishlistPage from "./pages/wishlist/WishlistPage";
import CartPage from "./pages/cart-page/CartPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

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
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    <ReactQueryDevtools></ReactQueryDevtools>
  </QueryClientProvider>
);
