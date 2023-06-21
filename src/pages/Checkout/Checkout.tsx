import React, { FC } from 'react';
import './Checkout.sass';
import { useSelector } from 'react-redux';
import {
  totalAmountSelector,
  totalDiscountSelector,
} from '../../store/selectors';

import { RootState } from '../../store/reducers';
import { ProductInCart } from '../../store/types/main.types';

const Checkout: FC = () => {
  const products: ProductInCart[] = useSelector(
    (state: RootState) => state.cart.cart,
  );
  const subTotal: number = useSelector(totalAmountSelector);
  const totalDiscount: number = useSelector(totalDiscountSelector);
  const deliveryFee: number = useSelector(
    (state: RootState) => state.cart.deliveryFee,
  );
  return (
    <div className="checkout-page">
      <div className="checkout-right">
        <h3 className="checkout-title">Your Order</h3>
        <ul className="checkout-list">
          {products.map((item: ProductInCart) => (
            <li key={item.id} className="checkout-list__item">
              <span>{item.amount}</span>
              <h3 className="gray-title">
                X
                {`${item.name}|${item.size}`}
              </h3>
              <h3 className="gray-title">
                $
                {item.price}
              </h3>
            </li>
          ))}
        </ul>
        <div className="checkout-right__body">
          <div className="checkout-right__key-val">
            <h3 className="gray-title">Sub Total</h3>
            <h3 className="gray-title">
              $
              {subTotal}
            </h3>
          </div>
          <div className="checkout-right__key-val">
            <h3 className="gray-title">Delivery Fee</h3>
            <h3 className="gray-title">
              $
              {deliveryFee}
            </h3>
          </div>
          <div className="checkout-right__key-val">
            <h3 className="gray-title">Discount</h3>
            <h3 className="gray-title">
              $
              {totalDiscount}
            </h3>
          </div>
          <div className="checkout-right__total">
            <h3 className="checkout-title">Total (Incl. VAT)</h3>
            <h3 className="gray-title">
              $
              {subTotal - totalDiscount + deliveryFee}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
