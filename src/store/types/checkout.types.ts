import {
  POST_ORDER_STARTED,
  POST_ORDER_SUCCESS,
} from '../actions/actionTypes';
import { ProductInCart } from './main.types';

export interface OrderDetails {
  id: number;
  products: ProductInCart[];
}

export interface OrderDetailsToSubmit {
  products: ProductInCart[];
}

export interface CheckoutState {
  orderDetails: OrderDetails | null;
}


export interface PostOrderStarted {
  type: typeof POST_ORDER_STARTED;
}

export interface PostOrderSuccessAction {
  type: typeof POST_ORDER_SUCCESS;
  payload: OrderDetails;
}

export type CheckoutActionTypes =
  | PostOrderSuccessAction
  | PostOrderStarted;
