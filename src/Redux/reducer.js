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
    //-----------------Delete Product From Redux Only--------------------------
    case types.DELETE_PRODUCT_REDUX_SUCCESS: {
      let pro = [...state.products];
      console.log("reducer", pro);
      let deleteItem = pro.filter((e) => e._id === payload);
      if (deleteItem) {
        let newList = pro.filter((e) => e._id !== payload);
        console.log("deleteItem", newList);
        return {
          ...state,
          isLoading: false,
          products: newList,
          isError: false,
        };
      }
    }
    case types.GET_CATEGORIES_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }
    default:
      return state;
  }
};

export default reducer;
