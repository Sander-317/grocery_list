import React from "react";

function ListItem({ item, clickItem, showQuantities, showPice, showCost }) {
  const formatterEUR = new Intl.NumberFormat("eu-EU", {
    maximumFractionDigits: 2,
    style: "currency",
    currency: "EUR",
  });

  return (
    <li
      key={item.id}
      className="list-item"
      onClick={clickItem}
      value={item.title}
    >
      <div>{item.title}</div>
      {showPice && (
        <>
          <div>price: {formatterEUR.format(item.price)}</div>
        </>
      )}
      {showQuantities && (
        <>
          <div>amount: {item.amount}</div>
        </>
      )}
      {showCost && (
        <>
          <div>cost: {formatterEUR.format(item.price * item.amount)}</div>
        </>
      )}
    </li>
  );
}

export default ListItem;
