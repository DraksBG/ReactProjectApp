import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/add_product_reducer";
import {
    GET_PRODUCT_BODY,
    POST_PRODUCT_START,
    POST_PRODUCT_SUCCESS,
    POST_PRODUCT_ERROR,
  } from "../actions";