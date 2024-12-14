import React, { useState } from "react";

function CartItem({ item, removeFromCart, updateQuantity }) {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleChangeQuantity = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    setQuantity(newQuantity);
    updateQuantity(item.id, newQuantity);
  };

  return (
    <div>
      <p>
        {item.name} - ${item.price} x{" "}
        <input
          type="number"
          value={quantity}
          onChange={handleChangeQuantity}
          min="1"
        />
      </p>
      <button onClick={() => removeFromCart(item.id)}>Remove</button>
    </div>
  );
}

export default CartItem;
