import * as types from "./action.types";

const initialState = {
  isLoading: false,
  products: [],
  categories: [],
  isError: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    // -------------------Get All Products--------------------------------------
    case types.GET_PRODUCTS_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }
    case types.GET_PRODUCTS_SUCCESS: {
      return { ...state, isLoading: false, products: payload, isError: false };
    }
    case types.GET_PRODUCTS_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }
    // -------------------Get All Categories--------------------------------------
    case types.GET_CATEGORIES_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }
    case types.GET_CATEGORIES_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        categories: payload,
        isError: false,
      };
    }
    case types.GET_CATEGORIES_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }
    default:
      return state;
  }
};

export default reducer;
