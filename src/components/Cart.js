import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function Cart(props) {
  const [items, setItems] = useState(0);

  return (
    <div>
      <button onClick={props.addItemToCart}>+</button>
      <FontAwesomeIcon icon={faCartShopping} />
      <button onClick={props.removeItemFromCart}>-</button>
    </div>
  );
}
