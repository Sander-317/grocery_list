import React from "react";

function ListItem(props) {
  console.log(props);
  return (
    <li
      key={props.id}
      className="list-item"
      //   onClick={clickItem}
      value={props.title}
    >
      {props.title}
    </li>
  );
}

export default ListItem;
