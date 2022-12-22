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
      ],
      shoppingListItems: [
        { id: 4, title: "chips" },
        { id: 5, title: "redbull" },
      ],
    };
    this.handleClickGroceryItem = this.handleClickGroceryItem.bind(this);
  }

  handleClickGroceryItem(item) {
    console.log(`Clicked handleClickGroceryItem! ${item.id}: ${item.title}`);
  }

  render() {
    return (
      <div>
        container
        <GroceryList
          items={this.state.groceryItems}
          onItemClick={this.handleClickGroceryItem}
        />
        <ShoppingCart
          items={this.state.shoppingListItems}
          onItemClick={this.handleClickGroceryItem}
        />
      </div>
    );
  }
}

export default Container;
