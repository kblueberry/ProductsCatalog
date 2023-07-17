import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./ProductsReducer";

export const store = configureStore({
  reducer: productsReducer,
});
