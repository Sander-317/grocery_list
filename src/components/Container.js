import React from "react";
import ShoppingCart from "./ShoppingCart";
import GroceryList from "./GroceryList";

class Container extends React.Component {
  render() {
    return (
      <div>
        container
        <ShoppingCart />
        <GroceryList />
      </div>
    );
  }
}

export default Container;
