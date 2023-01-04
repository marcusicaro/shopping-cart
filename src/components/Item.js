import React from "react";
import { useOutletContext, useParams } from "react-router-dom";

export default function Item() {
  const { id } = useParams();
  const [items, setItems] = useOutletContext();
  // const obj = useOutletContext();
  return (
    <div>
      {id}
      <br></br>
      {items.redDragon.name}
    </div>
  );
}
