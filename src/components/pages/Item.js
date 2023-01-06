import React from "react";
import { useOutletContext, useParams } from "react-router-dom";

export default function Item(props) {
  const { id } = useParams();
  const [items, setItems] = useOutletContext();

  const handleRenderItem = (id) => {
    return items.map((e) => {
      if (e.id === id) {
        return (
          <div key={e.id}>
            <h3>{e.name}</h3>
            <p>{e.price}</p>
            <button onClick={() => props.addItemToCart(e)}>Buy</button>
            <button onClick={() => props.removeItemFromCart(e)}>Remove</button>
          </div>
        );
      }
    });
  };

  return <div>{handleRenderItem(id)}</div>;
}
