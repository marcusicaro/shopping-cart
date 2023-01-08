import React from "react";
import toggleSidebar from "./functions/toggleSidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function Cart(props) {
  const handleTotal = () => {
    let result = 0;
    props.cart.map((e) => {
      result += e.price * e.quantity;
    });
    return result;
  };

  const handleRenderItems = () => {
    if (props.cart.length > 0) {
      return props.cart.map((e) => {
        return (
          <div data-testid={e.name} key={e.name} className='item-cart'>
            <button
              onClick={() => {
                props.removeItemFromCart(e);
              }}
            >
              -
            </button>
            <h3 data-testid={"paragraph"}>{e.quantity}</h3>
            <button
              data-testid={"increase"}
              onClick={() => {
                props.addItemToCart(e);
              }}
            >
              +
            </button>
            <h3>{e.name}</h3>
          </div>
        );
      });
    } else {
      return <div className='empty'>You cart is empty</div>;
    }
  };
  return (
    <div className='cart'>
      <div>
        <FontAwesomeIcon
          icon={faCartShopping}
          className='cart-icon'
          onClick={() => {
            toggleSidebar();
          }}
        />
      </div>
      <div className='cart-items'>
        <div
          className='close-btn'
          onClick={() => {
            toggleSidebar();
          }}
        >
          X
        </div>
        <h1>Your shopping cart</h1>
        {handleRenderItems()}
        <p className='total'>
          <b>Total: {handleTotal()}</b>
        </p>
      </div>
    </div>
  );
}
