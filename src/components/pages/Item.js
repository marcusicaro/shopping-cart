import React from "react";
import { useOutletContext, useParams } from "react-router-dom";

export default function Item() {
  const { id } = useParams();
  const [items, setItems] = useOutletContext();

  const renderItem = (id) => {
    return items.map((e) => {
      if (e.id === id) {
        return (
          <div key={e.id}>
            <h3>{e.name}</h3>
            <p>{e.price}</p>
          </div>
        );
      }
    });
  };

  return (
    <div>
      {id}
      <br></br>
      {renderItem(id)}
    </div>
  );
}
