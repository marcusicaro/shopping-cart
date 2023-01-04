import React from "react";
import { Routes, Route } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import Item from "./Item";

export default function Shop() {
  const [items] = useOutletContext();
  const handleItemsRender = (list) => {
    return list.map((e) => <p key={e.id}>{e.name}</p>);
  };
  return (
    <div>
      <h1>Shop Page</h1>
      {handleItemsRender(items)}
      <Routes>
        <Route path='/shop/:id' element={<Item />} />
      </Routes>
    </div>
  );
}
