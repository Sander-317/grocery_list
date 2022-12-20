import React from "react";
import ListItem from "./ListItem";

class List extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <ListItem title="steak" />
          <ListItem title="rice" />
          <ListItem title="coke" />
          <ListItem title="chips" />
        </ul>
      </div>
    );
  }
}

export default List;
