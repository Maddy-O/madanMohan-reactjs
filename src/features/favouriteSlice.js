import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  favouriteItems: localStorage.getItem("favouriteItems")
    ? JSON.parse(localStorage.getItem("favouriteItems"))
    : [],
  favouriteTotalQuantity: 0,
};

const favouriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFavourite(state, action) {
      const itemIndex = state.favouriteItems.findIndex(
        (item) => item._id === action.payload._id
      );
      if (itemIndex >= 0) {
        state.favouriteItems[itemIndex].favouriteQuantity += 1;
        toast.info(`${state.favouriteItems[itemIndex].name} added to cart`, {
          position: "bottom-left",
        });
      } else {
        const tempProduct = { ...action.payload, favouriteQuantity: 1 };
        state.favouriteItems.push(tempProduct);
        toast.success(`${action.payload.name} added to cart`, {
          position: "bottom-left",
        });
      }
      localStorage.setItem(
        "favouriteItems",
        JSON.stringify(state.favouriteItems)
      );
    },
    remoeFromFavourite(state, action) {
      const newFav = state.favouriteItems.filter(
        (item) => item._id !== action.payload._id
      );
      state.favouriteItems = newFav;
      localStorage.setItem(
        "favouriteItems",
        JSON.stringify(state.favouriteItems)
      );
      toast.error(`${action.payload.name} removed from cart`, {
        position: "bottom-left",
      });
    },
  },
});

export const { addToFavourite, remoeFromFavourite } = favouriteSlice.actions;
export default favouriteSlice.reducer;
