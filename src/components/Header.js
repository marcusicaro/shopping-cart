import React, { useState } from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";

export default function Header() {
  const [searchParams, setSearchParams] = useSearchParams({
    name: "",
  });
  const [items, setItems] = useState({
    greenDragon: {
      name: "Green Dragon",
      price: 10,
      id: 1,
    },
    brownDragon: {
      name: "Brown Dragon",
      price: 20,
    },
    redDragon: {
      name: "Red Dragon",
      price: 50,
    },
    silverDragon: {
      name: "Silver Dragon",
      price: 100,
    },
    blackDragon: {
      name: "Black Dragon",
      price: 250,
    },
    spikedDragon: {
      name: "Spiked Tail Dragon",
      price: 500,
    },
    chineseDragon: {
      name: "Chinese Dragon",
      price: 1000,
    },
    skullDragon: {
      name: "Skull Dragon",
      price: 1500,
    },
    dancingDragon: {
      name: "Dancing Dragon",
      price: 5000,
    },
  });

  const name = searchParams.get("name");
  return (
    <div>
      Header
      <Outlet context={[items, setItems]} />
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
  );
}
