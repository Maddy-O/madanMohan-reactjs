import * as types from "./action.types";
import axios from "axios";

const getAllProducts = () => (dispatch) => {
  dispatch({ type: types.GET_PRODUCTS_REQUEST });
  return axios
    .get("/products")
    .then((res) =>
      //   console.log(res.data)
      dispatch({ type: types.GET_PRODUCTS_SUCCESS, payload: res.data })
    )
    .catch((err) =>
      //   console.log(err)
      dispatch({ type: types.GET_PRODUCTS_FAILURE, payload: err })
    );
};

const getProductById = (payload) => {
  //   dispatch({ type: types.GET_PRODUCTS_BY_ID_REQUEST });
  return axios
    .get(`/products/${payload}`)
    .then(
      (res) => console.log(res.data)
      //   dispatch({ type: types.GET_PRODUCTS_SUCCESS, payload: res.data })
    )
    .catch(
      (err) => console.log(err)
      //   dispatch({ type: types.GET_PRODUCTS_FAILURE, payload: err })
    );
};

const postNewProduct = (payload) => {
  //   dispatch({ type: types.POST_NEW_PRODUCT_REQUEST });
  return axios
    .post("/products", payload)
    .then(
      (res) => console.log(res.data)
      // dispatch({ type: types.POST_NEW_PRODUCT_SUCCESS, payload: res.data })
    )
    .catch(
      (err) => console.log(err)
      // dispatch({ type: types.POST_NEW_PRODUCT_FAILURE, payload: err })
    );
};

const getAllCategories = () => (dispatch) => {
  dispatch({ type: types.GET_CATEGORIES_REQUEST });
  return axios
    .get("/categories")
    .then((res) =>
      //   console.log(res.data)
      dispatch({ type: types.GET_CATEGORIES_SUCCESS, payload: res.data })
    )
    .catch((err) =>
      //    console.log(err)
      dispatch({ type: types.GET_CATEGORIES_FAILURE, payload: err })
    );
};

const getCategoriesById = (payload) => {
  //   dispatch({ type: types.GET_CATEGORIES_BY_ID_REQUEST });
  return axios
    .get(`/categories/${payload}`)
    .then(
      (res) => console.log(res.data)
      //   dispatch({ type: types.GET_CATEGORIES_BY_ID_SUCCESS, payload: res.data })
    )
    .catch(
      (err) => console.log(err)
      //   dispatch({ type: types.GET_CATEGORIES_BY_ID_FAILURE, payload: err })
    );
};

export {
  getAllProducts,
  getProductById,
  postNewProduct,
  getAllCategories,
  getCategoriesById,
};
