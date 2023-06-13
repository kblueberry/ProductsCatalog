import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ProductsPage from "./pages/products-page/ProductsPage";
import ReviewsPage from "./pages/reviews-page/ReviewsPage";
import Navbar from "./navbar/Navbar";
import Wishlist from "./pages/wishlist/Wishlist";

const AppLayout = () => {
  return <>
    <Navbar/>
    <div className="top-indent-container">
      <Outlet></Outlet>
    </div>
  </>
}

const router = createBrowserRouter([
  {
    element: <AppLayout/>,
    children: [
      {
        path: "/",
        element: <ProductsPage/>
      },
      {
        path: "/product/:id/reviews",
        element: <ReviewsPage/>
      },
      {
        path: "/wishlist",
        element: <Wishlist/>
      },
      {
        path: "/card",
        element: <></>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <RouterProvider router={router}/>
)
