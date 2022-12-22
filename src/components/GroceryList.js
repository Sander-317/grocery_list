import React from "react";
import List from "./List";

class GroceryList extends React.Component {
  render() {
    return (
      <div>
        Grocery List
        <List />
      </div>
    );
  }
}

export default GroceryList;
