import React from "react";
import { useDispatch } from "react-redux";
import { decreaseCartItem } from "../store/cartReducer";

export default function CartItem({
  productId,
  title,
  rating,
  price,
  imageUrl,
  amount,
}) {
  const dispatch = useDispatch();
  return (
    <div className="cart-item-container">
      <div className="cart-item">
        <img src={imageUrl} alt={title} />
        <div>
          <h3>{title}</h3>
          <p>{rating} ★ ★ ★ ★</p>
        </div>
      </div>
      <div className="item-price">${price}</div>
      <div className="item-quantity">
        <button
          onClick={() =>
            dispatch(
              decreaseCartItem({
                productId,
                title,
                rating,
                price,
                imageUrl,
                amount,
              })
            )
          }
        >
          -
        </button>
        <span>{amount}</span>
        <button>+</button>
      </div>
      <div className="item-total">${amount * price}</div>
    </div>
  );
}
