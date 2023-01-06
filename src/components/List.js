import React from "react";
import ListItem from "./ListItem";

class List extends React.Component {
  render() {
    return (
      <div>
        <ul className="app-list">
          {this.props.items.map((item) => (
            <ListItem
              key={item.id}
              item={item}
              clickItem={() => this.props.onItemClick(item)}
              showQuantities={this.props.showQuantities}
              showPice={this.props.showPrice}
              showCost={this.props.showCost}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default List;
