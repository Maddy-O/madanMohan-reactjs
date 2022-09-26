import { configureStore } from "@reduxjs/toolkit";
import favouriteReducer from "./favouriteSlice";
import productReducer from "./productSlice";

export const productStore = configureStore({
  reducer: {
    products: productReducer,
    favourite: favouriteReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  // getDefaultMiddleware().concat(productsApi.middleware),
});
