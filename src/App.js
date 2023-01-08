import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import ShopRoutes from "./components/ShopRoutes";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  function addItemToCart(item, ammount) {
    let cartCopy = [...cart];
    let itemInCart;

    cartCopy.forEach((el) => {
      if (el.name === item.name) {
        itemInCart = true;
        ammount > 0
          ? (el.quantity = ammount + Number(el.quantity))
          : (el.quantity += 1);
      }
    });

    itemInCart == null &&
      cartCopy.push({
        name: item.name,
        price: item.price,
        quantity: ammount || 1,
      });

    setCart(cartCopy);
  }

  function removeItemFromCart(item) {
    let cartCopy = [...cart];

    cartCopy.forEach((el, index) => {
      if (el.name === item.name) {
        el.quantity -= 1;

        if (el.quantity === 0) {
          return cartCopy.splice(index, 1);
        }
      }
    });

    setCart(cartCopy);
  }

  function handleDeleteItem(item) {
    let cartCopy = [...cart];

    cartCopy.forEach((el, index) => {
      if (el.name === item.name) {
        return cartCopy.splice(index, 1);
      }
    });

    setCart(cartCopy);
  }

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/shop/*'
          element={
            <ShopRoutes
              addItemToCart={addItemToCart}
              removeItemFromCart={removeItemFromCart}
              handleDeleteItem={handleDeleteItem}
              cart={cart}
            />
          }
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
