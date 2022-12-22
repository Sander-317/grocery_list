import React from "react";
import List from "./List";

function GroceryList({ items, onItemClick }) {
  return (
    <div>
      Grocery List
      <List items={items} onItemClick={onItemClick} />
    </div>
  );
}

export default GroceryList;
