import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Shop from "./Shop";
import Item from "./pages/Item";

export default function ShopManage() {
  const [cart, setCart] = useState(0);

  const addItemToCart = () => {
    setCart(cart + 1);
    console.log(cart);
  };

  const removeItemFromCart = () => {
    setCart(cart - 1);
    console.log(cart);
  };

  return (
    <>
      <Routes>
        <Route
          element={
            <Header
              addItemToCart={addItemToCart}
              removeItemFromCart={removeItemFromCart}
              cart={cart}
            />
          }
        >
          <Route index element={<Shop />} />
          <Route path=':id' element={<Item />} />
        </Route>
      </Routes>
    </>
  );
}
