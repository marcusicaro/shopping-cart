import React, { useState } from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";

export default function Header() {
  const [searchParams, setSearchParams] = useSearchParams({
    name: "",
  });
  const [items, setItems] = useState([
    {
      name: "Green Dragon",
      price: 10,
      id: "greenDragon",
    },
    {
      name: "Brown Dragon",
      price: 20,
      id: "brownDragon",
    },
    {
      name: "Red Dragon",
      price: 50,
      id: "redDragon",
    },
    {
      name: "Silver Dragon",
      price: 100,
      id: "silverDragon",
    },
    {
      name: "Black Dragon",
      price: 250,
      id: "blackDragon",
    },
    {
      name: "Spiked Tail Dragon",
      price: 500,
      id: "spikedDragon",
    },
    {
      name: "Chinese Dragon",
      price: 1000,
      id: "chineseDragon",
    },
    {
      name: "Skull Dragon",
      price: 1500,
      id: "skullDragon",
    },
    {
      name: "Dancing Dragon",
      price: 5000,
      id: "dancingDragon",
    },
  ]);

  const name = searchParams.get("name");
  return (
    <div>
      Header
      <Outlet context={[items]} />
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
