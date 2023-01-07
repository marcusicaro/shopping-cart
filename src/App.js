import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import ShopRoutes from "./components/ShopRoutes";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    cart.length > 1 && setCart(cart);
  }, [cart]);

  function addItemToCart(item) {
    let cartCopy = [...cart];
    let notInCart = true;

    cartCopy.forEach((el) => {
      if (el.name === item.name) {
        notInCart = false;
        return (el.quantity = el.quantity + 1);
      }
    });

    notInCart === true &&
      cartCopy.push({
        name: item.name,
        quantity: 1,
      });

    setCart(cartCopy);

    sessionStorage.setItem("pageCart", [...cart]);
  }

  function removeItemFromCart(item) {
    let cartCopy = [...cart];

    cartCopy.forEach((el, index) => {
      if (el.name === item.name) {
        el.quantity = el.quantity - 1;

        if (el.quantity === 0) {
          return cartCopy.splice(index, 1);
        }
      }
    });

    setCart(cartCopy);

    sessionStorage.setItem("pageCart", [...cart]);
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
