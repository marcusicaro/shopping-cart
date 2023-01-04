import React, { useState } from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";
import Cart from "./Cart";
import itemsList from "./data/itemsList";

export default function Header(props) {
  const [searchParams, setSearchParams] = useSearchParams({
    name: "",
  });
  const [items, setItems] = useState(itemsList);

  const name = searchParams.get("name");

  return (
    <div>
      Header
      <p>{props.cart}</p>
      <Cart
        addItemToCart={props.addItemToCart}
        removeItemFromCart={props.removeItemFromCart}
      />
      <input
        type='text'
        value={name}
        onChange={(e) => setSearchParams({ name: e.target.value })}
        placeholder='Search dragon...'
      />
      <Link to={`/shop/${name}`}>
        <button>Search</button>
      </Link>
      <Outlet context={[items]} />
    </div>
  );
}
