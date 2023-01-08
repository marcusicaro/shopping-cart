import React from "react";
import { Routes, Route } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";
import Item from "./Item";

export default function Shop(props) {
  const [item] = useOutletContext();
  const handleItemsRender = (list) => {
    return list.map((e) => (
      <div className='item-box' key={e.id}>
        <Link to={e.id}>
          <div className='item-img'>
            <img src={`/images/${e.id}.png`} alt='dragon' className='img-box' />
          </div>
          <div className='item-description'>
            <p>
              <b>{e.name}</b>
            </p>
            <p>${e.price}</p>
          </div>
        </Link>

        <button
          onClick={() => {
            props.addItemToCart(e);
          }}
          className='add-button'
        >
          Add to cart
        </button>
      </div>
    ));
  };

  return (
    <div className='shop-main'>
      <div className='items-container'> {handleItemsRender(item)}</div>

      <Routes>
        <Route path='/shop/:id' element={<Item />} />
      </Routes>
    </div>
  );
}
