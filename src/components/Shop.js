import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./Header";
import Item from "./Item";

export default function Shop() {
  return (
    <div>
      <h1>Items Page</h1>
      <Routes>
        <Route path='/shop/:id' element={<Item />} />
      </Routes>
    </div>
  );
}
