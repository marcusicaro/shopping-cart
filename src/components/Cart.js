import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function Cart(props) {
  const handleRenderItems = () => {
    return props.cart.map((e) => {
      return (
        <div data-testid={e.name} key={e.name}>
          <button
            onClick={() => {
              props.removeItemFromCart(e);
            }}
          >
            -
          </button>
          <h3>{e.name}</h3>
          <p data-testid={"paragraph"}>{e.quantity}</p>
          <button
            data-testid={"increase"}
            onClick={() => {
              props.addItemToCart(e);
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
