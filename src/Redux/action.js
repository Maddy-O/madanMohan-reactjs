import * as types from "./action.types";
import axios from "axios";
import { useSelector } from "react-redux";

const getAllProducts = () => (dispatch) => {
  dispatch({ type: types.GET_PRODUCTS_REQUEST });
  return axios
    .get("/products")
    .then((res) =>
      dispatch({ type: types.GET_PRODUCTS_SUCCESS, payload: res.data.products })
    )
    .catch((err) =>
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

const postNewProduct = (payload) => (dispatch) => {
  dispatch({ type: types.POST_NEW_PRODUCT_REQUEST });
  return axios
    .post("/products", payload)
    .then((res) => {
      console.log("after post new peoduct", res.data);
      dispatch({ type: types.POST_NEW_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch((err) =>
      //  console.log(err)
      dispatch({ type: types.POST_NEW_PRODUCT_FAILURE, payload: err })
    );
};

const getAllCategories = () => (dispatch) => {
  dispatch({ type: types.GET_CATEGORIES_REQUEST });
  return axios
    .get("/categories")
    .then((res) =>
      dispatch({
        type: types.GET_CATEGORIES_SUCCESS,
        payload: res.data.categories,
      })
    )
    .catch((err) =>
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

const deleteProductRedux = (payload) => (dispatch) => {
  let url = "http://localhost:3000";
  // const products = useSelector((state) => state.products.products);
  // dispatch({ type: types.DELETE_PRODUCT_REDUX_REQUEST });
  // let deleteItem = products.filter((e) => e._id === payload);
  // console.log("deleteItem", deleteItem);
  // if (deleteItem) {
  // let newList = products.filter((e) => e._id !== payload);
  console.log("yes", payload);
  return dispatch({
    type: types.DELETE_PRODUCT_REDUX_SUCCESS,
    payload,
  });
  // } else {
  // console.log("regect");
  // return dispatch({ type: types.DELETE_PRODUCT_REDUX_FAILURE });
  // }
};

export {
  getAllProducts,
  getProductById,
  postNewProduct,
  getAllCategories,
  getCategoriesById,
  deleteProductRedux,
};
