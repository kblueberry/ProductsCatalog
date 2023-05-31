import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import ProductReviews from "./ProductReviews";
import './index.scss';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/product/:id/reviews",
    element: <ProductReviews/>
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <RouterProvider router={router}/>
)
