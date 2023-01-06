import React from "react";
import ShoppingCart from "./ShoppingCart";
import GroceryList from "./GroceryList";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceryItems: [
        { id: 1, title: "steak", price: 3.53 },
        { id: 2, title: "rice", price: 1.25 },
        { id: 3, title: "coke", price: 2.43 },
      ],
      shoppingListItems: [
        { id: 4, title: "chips", price: 1.15, amount: 2 },
        { id: 5, title: "redbull", price: 2.51, amount: 3 },
      ],
    };
    this.handleClickGroceryItem = this.handleClickGroceryItem.bind(this);
  }

  handleClickGroceryItem(item) {
    console.log(`Clicked handleClickGroceryItem! ${item.id}: ${item.title}`);
  }

  addAmountToItem = (item, amount) => {
    this.setState({
      shoppingListItems: this.state.shoppingListItems.map((listItem) => {
        if (listItem.title === item.title) {
          return {
            id: listItem.id,
            title: listItem.title,
            price: listItem.price,
            amount: listItem.amount + amount,
          };
        }
        return listItem;
      }),
    });
  };

  addGroceryItemToCart = (item) => {
    console.log(`addGroceryItemToCart: ${item.title}`);
    if (
      this.state.shoppingListItems
        .map((item) => item.title)
        .includes(item.title)
    ) {
      this.addAmountToItem(item, 1);
    } else {
      this.setState({
        shoppingListItems: [
          ...this.state.shoppingListItems,
          { id: item.id, title: item.title, price: item.price, amount: 1 },
        ],
      });
    }
  };

  emptyCart = () => {
    this.setState({
      shoppingListItems: [],
    });
  };

  addItemToGroceryList = (title, price) => {
    this.setState({
      groceryItems: [
        ...this.state.groceryItems,
        {
          id:
            this.state.groceryItems.length +
            this.state.shoppingListItems.length +
            1,
          title: title,
          price: price,
          amount: 1,
        },
      ],
    });
  };

  render() {
    const formatterEUR = new Intl.NumberFormat("eu-EU", {
      maximumFractionDigits: 2,
      style: "currency",
      currency: "EUR",
    });
    return (
      <div className="container">
        <header>
          <h1>Grocery List</h1>
          <ul className="counter">
            <li> types of items: {this.state.shoppingListItems.length}</li>
            <li>
              {" "}
              total amount items:{" "}
              {this.state.shoppingListItems.reduce((total, item) => {
                return total + item.amount;
              }, 0)}{" "}
            </li>
          </ul>
          <div>
            total cost:{" "}
            {formatterEUR.format(
              this.state.shoppingListItems.reduce((total, item) => {
                console.log(item);
                return total + item.amount * item.price;
              }, 0)
            )}
          </div>
        </header>
        <main>
          <GroceryList
            items={this.state.groceryItems}
            onItemClick={this.addGroceryItemToCart}
            onItemAdd={this.addItemToGroceryList}
          />
          <ShoppingCart
            items={this.state.shoppingListItems}
            onItemClick={this.handleClickGroceryItem}
            onEmptyClick={this.emptyCart}
          />
        </main>
      </div>
    );
  }
}

export default Container;
