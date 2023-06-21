import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import products from './products';
import cart from './cart';
import checkout from './checkout';
import { CartActionTypes, CartState } from '../types/main.types';

const cartPersistConfig = {
  key: 'auth',
  storage,
  blacklist: ['isCartOpen'],
};

const rootReducer = combineReducers({
  products,
  checkout,
  cart: persistReducer<CartState, CartActionTypes>(cartPersistConfig, cart),
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
