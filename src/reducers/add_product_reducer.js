import {
  GET_PRODUCT_BODY,
  POST_PRODUCT_START,
  POST_PRODUCT_SUCCESS,
  POST_PRODUCT_ERROR,
} from "../actions";

const add_product_reducer = (state, action) => {
    throw new Error(`No Matching "${action.type}" - action type`);
};

export default add_product_reducer;
