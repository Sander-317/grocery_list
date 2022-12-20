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
    this.listHandler = this.listHandler.bind(this);
  }

  listHandler() {
    const newArray = this.state.groceryItems.map((item) => {
      return <ListItem id={item.id} title={item.title} />;
    });
    console.log(newArray);
    return newArray;
  }

  render() {
    return (
      <div>
        <ul>
          {this.listHandler()}
          {/* <ListItem title="steak" />
          <ListItem title="rice" />
          <ListItem title="coke" />
          <ListItem title="chips" /> */}
        </ul>
      </div>
    );
  }
}

export default List;
