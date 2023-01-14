import React from "react";
import toggleSidebar from "./functions/toggleSidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

export default function Cart(props) {
  function handleQuantity() {
    let result = 0;
    props.cart.forEach((el) => {
      result += el.quantity;
    });
    if (result > 0) return <div className='cart-quantity'>{result}</div>;
  }

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
            <div className='text-content'>
              <h3>{e.name}</h3>{" "}
              <p
                className='remove'
                onClick={() => {
                  props.handleDeleteItem(e);
                }}
              >
                Remove
              </p>
            </div>
          </div>
        );
      });
    } else {
      return <div className='empty'>You cart is empty</div>;
    }
  };
  return (
    <div className='cart'>
      <div className='cart-info'>
        <FontAwesomeIcon
          icon={faCartShopping}
          className='cart-icon'
          onClick={() => {
            toggleSidebar();
          }}
        />
        {handleQuantity()}
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
