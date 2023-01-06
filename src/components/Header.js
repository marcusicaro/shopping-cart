import React, { useState } from "react";
import { Link, Outlet, useNavigate, useSearchParams } from "react-router-dom";
import Cart from "./Cart";
import itemsList from "./data/itemsList";

export default function Header(props) {
  const [searchParams, setSearchParams] = useSearchParams({
    name: "",
  });
  const [items, setItems] = useState(itemsList);

  const name = searchParams.get("name");
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
      Header
      <Cart
        addItemToCart={props.addItemToCart}
        removeItemFromCart={props.removeItemFromCart}
        cart={props.cart}
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
