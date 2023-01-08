import React, { useState } from "react";
import { Link, Outlet, useNavigate, useSearchParams } from "react-router-dom";
import Cart from "./Cart";
import itemsList from "./data/itemsList";

export default function Header(props) {
  const [searchParams, setSearchParams] = useSearchParams({
    name: "",
  });
  const [items] = useState(itemsList);

  const name = searchParams.get("name");
  const navigate = useNavigate();

  return (
    <div className='header'>
      <div className='header-content'>
        <Link to={"/shop"}>
          <img
            src={`/images/logo.png`}
            alt='dragon store logo'
            className='logo'
          />
        </Link>
        <div className='search'>
          <input
            type='text'
            value={name}
            onChange={(e) => setSearchParams({ name: e.target.value })}
            placeholder='Search dragon...'
          />
          <Link to={`/shop/${name}`}>
            <button>Search</button>
          </Link>
        </div>
        <div>
          <Cart
            addItemToCart={props.addItemToCart}
            removeItemFromCart={props.removeItemFromCart}
            handleDeleteItem={props.handleDeleteItem}
            cart={props.cart}
          />
        </div>
      </div>
      <Outlet context={[items]} />
    </div>
  );
}
