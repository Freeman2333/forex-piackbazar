import { toast } from 'react-toastify';
import {
  OrderDetailsToSubmit,
} from '../types/checkout.types';

import {
  RemoveProductFromCartAction,
  AddToCartAction,
  Product,
  CartActionTypes,
  ProductCategory,
  IncreaseProductAmountAction,
  DecreaseProductAmountAction,
} from '../types/main.types';

import {
  GetProductCategoriesParams,
  AddCategoriesAction,
  AddProductsAction,
  ProductsActionTypes,
  FetchProductSuccessAction,
} from '../types/products.types';
import { AppDispatch } from '../store';


import {
  TOGGLE_CART,
  ADD_TO_CART,
  ADD_CATEGORIES,
  ADD_PRODUCTS,
  FETCH_PRODUCT_STARTED,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILED,
  REMOVE_FROM_CART,
  INCREASE_AMOUNT,
  DECREASE_AMOUNT,
  POST_ORDER_STARTED,
  POST_ORDER_SUCCESS,
  SET_GET_PRODUCTS_CATEGORIES_PARAMS,
} from './actionTypes';
import { instance } from '../../api/api';

type GetProductCeategoriesParams =
  | { '_where[_or][0][category]': number | undefined }
  | { '_where[_or][1][category.parentCategory.id]': number | undefined }
  | { _limit: number | undefined };



export const toggleCart = (): CartActionTypes => ({ type: TOGGLE_CART });


export const addProducts = (products: Product[]): AddProductsAction => ({
  type: ADD_PRODUCTS,
  payload: products,
});

export const addCategories = (
  categories: ProductCategory[],
): AddCategoriesAction => ({
  type: ADD_CATEGORIES,
  payload: categories,
});


export const setGetProductsCategoriesParams = (
  params: GetProductCategoriesParams,
): ProductsActionTypes => ({
  type: SET_GET_PRODUCTS_CATEGORIES_PARAMS,
  payload: params,
});

export const getProducts = (obj: { isChildCategory?: boolean; id?: number; productLimit?: number }) => async (dispatch: AppDispatch) => {
  const { isChildCategory = false, id, productLimit } = obj;
  let params: GetProductCeategoriesParams = isChildCategory
    ? { '_where[_or][0][category]': id }
    : { '_where[_or][1][category.parentCategory.id]': id };
  dispatch(setGetProductsCategoriesParams({ isChildCategory, id }));
  if (productLimit) params = { ...params, _limit: productLimit };
  const { data } = await instance.get('products', { params });
  dispatch(addProducts(data));
};

export const unselectProduct = (): FetchProductSuccessAction => ({
  type: FETCH_PRODUCT_SUCCESS,
  payload: null,
});

export const getProduct = (id: string) => async (dispatch: AppDispatch) => {
  dispatch({ type: FETCH_PRODUCT_STARTED });
  try {
    const { data } = await instance.get(`products/${id}`);
    const categoryId = data.category.id;
    dispatch({
      type: FETCH_PRODUCT_SUCCESS,
      payload: data,
    });
    const params = {
      '_where[_or][0][category]': categoryId,
    };
    const { data: productsData } = await instance.get('products', { params });
    dispatch(addProducts(productsData));
  } catch (error) {
    dispatch({ type: FETCH_PRODUCT_FAILED, payload: error });
  }
};

export const postOrder = (orderDetails: OrderDetailsToSubmit) => async (dispatch: AppDispatch): Promise<void> => {
  dispatch({ type: POST_ORDER_STARTED });
  try {
    const { data } = await instance.post('orders', orderDetails);
    dispatch({
      type: POST_ORDER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    toast.error('fill out all details about your order');
  }
};

export const getCategories = () => async (dispatch: AppDispatch) => {
  const { data } = await instance.get('categories');
  dispatch(addCategories(data));
};

export const addToCart = (product: Product): AddToCartAction => ({
  type: ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (id: string): RemoveProductFromCartAction => ({
  type: REMOVE_FROM_CART,
  payload: id,
});

export const increaseAmount = (id: string): IncreaseProductAmountAction => ({
  type: INCREASE_AMOUNT,
  payload: id,
});

export const decreaseAmount = (id: string): DecreaseProductAmountAction => ({
  type: DECREASE_AMOUNT,
  payload: id,
});
