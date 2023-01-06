import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function Cart(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(props.cart);
  }, [props]);

  const handleRenderItems = () => {
    return items.map((e) => {
      return (
        <div data-testid={e.name} key={e.name}>
          <button
            onClick={() => {
              props.removeItemFromCart(e);
              setItems(props.cart);
            }}
          >
            -
          </button>
          <h3>{e.name}</h3>
          <p>{e.quantity}</p>
          <button
            onClick={() => {
              props.addItemToCart(e);
              setItems(props.cart);
            }}
          >
            +
          </button>
        </div>
      );
    });
  };
  return (
    <div>
      <FontAwesomeIcon icon={faCartShopping} />
      {handleRenderItems()}
    </div>
  );
}
