import { createSlice, createAsyncThunk, AsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "axios";
import { Product, Categories } from "../model";

interface ProductState {
  isLoading: boolean;
  products: Product[];
  categories: Categories[];
  isError: boolean;
}

const initialState = {
  isLoading: false,
  products: [],
  categories: [],
  isError: false,
} as ProductState;

export const productsFetch: any = createAsyncThunk(
  "products/productsFetch",
  async () => {
    const response = await axios.get(
      "https://upayments-studycase-api.herokuapp.com/api/products",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hZGFuZG9vcjdzQGdtYWlsLmNvbSIsImdpdGh1YiI6Imh0dHBzOi8vZ2l0aHViLmNvbS9NYWRkeS1PIiwiaWF0IjoxNjYzOTk2ODI4LCJleHAiOjE2NjQ0Mjg4Mjh9.YeFpLfWn16YHyWYjDedac8JiGaj9IIOGEVD7Bp3K_qo",
        },
      }
    );
    return response?.data.products;
  }
);

export const postNewProduct: any = createAsyncThunk(
  "products/postProduct",
  async (payload) => {
    const response = await axios.post(
      "https://upayments-studycase-api.herokuapp.com/api/products",
      payload,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hZGFuZG9vcjdzQGdtYWlsLmNvbSIsImdpdGh1YiI6Imh0dHBzOi8vZ2l0aHViLmNvbS9NYWRkeS1PIiwiaWF0IjoxNjYzOTk2ODI4LCJleHAiOjE2NjQ0Mjg4Mjh9.YeFpLfWn16YHyWYjDedac8JiGaj9IIOGEVD7Bp3K_qo",
        },
      }
    );
    return response?.data;
  }
);

export const categoriesFetch: any = createAsyncThunk(
  "categories/categoriesFetch",
  async () => {
    const response = await axios.get(
      "https://upayments-studycase-api.herokuapp.com/api/categories",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hZGFuZG9vcjdzQGdtYWlsLmNvbSIsImdpdGh1YiI6Imh0dHBzOi8vZ2l0aHViLmNvbS9NYWRkeS1PIiwiaWF0IjoxNjYzOTk2ODI4LCJleHAiOjE2NjQ0Mjg4Mjh9.YeFpLfWn16YHyWYjDedac8JiGaj9IIOGEVD7Bp3K_qo",
        },
      }
    );
    return response?.data.categories;
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    deleteProduct(state, action) {
      const newFav: any = state.products.filter(
        (item: any) => item._id !== action.payload._id
      );
      state.products = newFav;
      toast.error(`${action.payload.name} deleted from redux`, {
        position: "bottom-center",
      });
    },
  },
  extraReducers: {
    [productsFetch.pending]: (state) => {
      state.isLoading = true;
    },
    [productsFetch.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    },
    [productsFetch.rejected]: (state) => {
      state.isError = true;
    },
    [categoriesFetch.pending]: (state) => {
      state.isLoading = true;
    },
    [categoriesFetch.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.categories = action.payload;
    },
    [categoriesFetch.rejected]: (state) => {
      state.isError = true;
    },
  },
});

export const { deleteProduct } = productSlice.actions;
export default productSlice.reducer;
