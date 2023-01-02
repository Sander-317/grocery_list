import React from "react";
import List from "./List";

function ShoppingCart({ items, onItemClick, onEmptyClick }) {
  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <button onClick={onEmptyClick}>empty shopping cart</button>
      <List items={items} onItemClick={onItemClick} showQuantities={true} />
    </div>
  );
}

export default ShoppingCart;
