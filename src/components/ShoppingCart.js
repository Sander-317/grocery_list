import React from "react";
import List from "./List";

function ShoppingCart({ items, onItemClick }) {
  return (
    <div>
      Shopping Cart
      <List items={items} onItemClick={onItemClick} />
    </div>
  );
}

export default ShoppingCart;
