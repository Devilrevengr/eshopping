import React from "react";
import CartItem from "./CartItem";

function Cart({ cart, removeFromCart, updateQuantity, getTotalPrice }) {
  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
            />
          ))}
          <h3>Total: ${getTotalPrice().toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
}

export default Cart;
