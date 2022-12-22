import React from "react";
import ShoppingCart from "./ShoppingCart";
import GroceryList from "./GroceryList";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceryItems: [
        { id: 1, title: "steak" },
        { id: 2, title: "rice" },
        { id: 3, title: "coke" },
        { id: 4, title: "chips" },
      ],
    };
  }

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
