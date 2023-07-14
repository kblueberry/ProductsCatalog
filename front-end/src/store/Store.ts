import { configureStore } from "@reduxjs/toolkit";
import { wishlistReducer } from "./WishlistReducer";

export const store = configureStore({
  reducer: wishlistReducer,
});
