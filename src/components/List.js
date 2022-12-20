import React from "react";
import ListItem from "./ListItem";

class List extends React.Component {
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

  onItemClick(item) {
    console.log(`Clicked ${item.id}: ${item.title}`);
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.groceryItems.map((item) => (
            <ListItem
              key={item.id}
              item={item}
              clickItem={() => this.onItemClick(item)}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default List;
