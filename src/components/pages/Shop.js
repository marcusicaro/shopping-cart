import React from "react";
import { Routes, Route } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";
import Item from "./Item";

export default function Shop() {
  const [item] = useOutletContext();
  const handleItemsRender = (list) => {
    return list.map((e) => (
      <div key={e.id}>
        <Link to={e.id}>
          <p>{e.name}</p>
          <p>{e.price}</p>
        </Link>
      </div>
    ));
  };

  return (
    <div>
      <h1>Shop Page</h1>
      {handleItemsRender(item)}
      <Routes>
        <Route path='/shop/:id' element={<Item />} />
      </Routes>
    </div>
  );
}
