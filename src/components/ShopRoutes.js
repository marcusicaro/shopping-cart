import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Shop from "./pages/Shop";
import Item from "./pages/Item";

export default function ShopRoutes(props) {
  return (
    <>
      <Routes>
        <Route
          element={
            <Header
              addItemToCart={props.addItemToCart}
              removeItemFromCart={props.removeItemFromCart}
              cart={props.cart}
            />
          }
        >
          <Route index element={<Shop addItemToCart={props.addItemToCart} />} />
          <Route
            path=':id'
            element={
              <Item
                addItemToCart={props.addItemToCart}
                removeItemFromCart={props.removeItemFromCart}
              />
            }
          />
        </Route>
      </Routes>
    </>
  );
}
