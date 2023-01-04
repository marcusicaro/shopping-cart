import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Shop from "./Shop";
import Item from "./Item";

export default function ShopRoutes() {
  return (
    <>
      <Routes>
        <Route element={<Header />}>
          <Route index element={<Shop />} />
          <Route path=':id' element={<Item />} />
        </Route>
      </Routes>
    </>
  );
}
