import { CheckoutActionTypes, CheckoutState } from '../types/checkout.types';
import {
  POST_ORDER_SUCCESS,
} from '../actions/actionTypes';

const initialState: CheckoutState = {
  orderDetails: null
};

const checkoutReducer = (
  state = initialState,
  action: CheckoutActionTypes,
): CheckoutState => {
  switch (action.type) {
    case POST_ORDER_SUCCESS:
      return {
        ...state,
        orderDetails: action.payload,
      };
    default:
      return state;
  }
};

export default checkoutReducer;
