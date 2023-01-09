import React, { useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";

export default function Item(props) {
  const [ammount, setAmmount] = useState(1);
  const { id } = useParams();
  const [items] = useOutletContext();

  const handleRenderItem = (id) => {
    return items.map((e) => {
      if (e.id === id) {
        return (
          <div key={e.id} className='item-page'>
            <div className='item-card'>
              <img src={`/images/${e.id}.png`} alt='dragon' />
              <h3>{e.name}</h3>
              <p>{e.price}</p>
              <div className='buttons'>
                <button
                  className='increase-btn'
                  onClick={() => {
                    if (ammount > 1) {
                      setAmmount(ammount - 1);
                    }
                  }}
                >
                  -
                </button>
                <input
                  type={"numeric"}
                  value={ammount}
                  onChange={(e) => {
                    e.target.value >= 1
                      ? setAmmount(e.target.value)
                      : (e.target.value = 1);
                  }}
                />
                <button
                  className='decrease-btn'
                  onClick={() => {
                    setAmmount(Number(ammount) + 1);
                  }}
                >
                  +
                </button>
                <button onClick={() => props.addItemToCart(e, ammount)}>
                  Buy
                </button>
                <button onClick={() => props.removeItemFromCart(e)}>
                  Remove
                </button>
              </div>
            </div>
          </div>
        );
      }
    });
  };

  return <div>{handleRenderItem(id)}</div>;
}
