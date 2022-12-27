import React from "react";

function ListItem({ item, clickItem, showQuantities }) {
  //   console.log(props);
  return (
    <li
      key={item.id}
      className="list-item"
      onClick={clickItem}
      value={item.title}
    >
      <div>{item.title}</div>
      {showQuantities && (
        <>
          <div>amount: {item.amount}</div>
        </>
      )}
    </li>
  );
}

export default ListItem;
