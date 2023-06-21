import {
  ADD_TO_CART,
  INCREASE_AMOUNT,
  DECREASE_AMOUNT,
  REMOVE_FROM_CART,
  TOGGLE_CART,
} from '../actions/actionTypes';

interface ProductDiscount {
  id: number;
  amount: number;
  title: string;
  isEnabled: boolean;
}

export interface Product {
  id: string;
  name: string;
  size: string;
  description: string;
  discount: ProductDiscount | null;
  finalPrice: number;
  photos: any[];
  price: number;
  category: ProductCategory;
}

export interface ProductInCart extends Product {
  amount: number;
}

export interface ProductCategory {
  id: number;
  title: string;
  childCategories?: ProductCategory[] | null;
  parrentCategory?: ProductCategory | null;
}

export interface CartState {
  isCartOpen: boolean;
  cart: ProductInCart[];
  deliveryFee: number;
}

export interface ToggleCartAction {
  type: typeof TOGGLE_CART;
}

export interface AddToCartAction {
  type: typeof ADD_TO_CART;
  payload: Product;
}

export interface IncreaseProductAmountAction {
  type: typeof INCREASE_AMOUNT;
  payload: string;
}

export interface DecreaseProductAmountAction {
  type: typeof DECREASE_AMOUNT;
  payload: string;
}

export interface RemoveProductFromCartAction {
  type: typeof REMOVE_FROM_CART;
  payload: string;
}

export type CartActionTypes =
  | AddToCartAction
  | IncreaseProductAmountAction
  | DecreaseProductAmountAction
  | RemoveProductFromCartAction
  | ToggleCartAction;

