import React from "react";

function ListItem(props) {
  console.log(props);
  return <li>{props.title}</li>;
}

export default ListItem;
