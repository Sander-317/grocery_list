import React from "react";
import List from "./List";

function GroceryList({ items }) {
  return (
    <div>
      Grocery List
      <List items={items} />
    </div>
  );
}

export default GroceryList;
