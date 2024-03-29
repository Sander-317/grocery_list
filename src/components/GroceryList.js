import React from "react";
import List from "./List";
import InputField from "./InputField";

function GroceryList({ items, onItemClick, onItemAdd }) {
  return (
    <div className="grocery-list">
      <h2>shopping List</h2>
      <InputField onSubmit={onItemAdd} />
      <List items={items} onItemClick={onItemClick} showPrice={true} />
    </div>
  );
}

export default GroceryList;
