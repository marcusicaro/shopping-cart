import React, { useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { Route, Routes, Link } from "react-router-dom";
import Item from "./Item";

export default function Search(props) {
  const [item] = useOutletContext();
  const { id } = useParams();

  function handleFilterList() {
    let itemCopy = [...item];

    //stackoverflow
    const filtered = (name) =>
      itemCopy.filter((el) =>
        el.name.toLowerCase().includes(name.toLowerCase())
      );

    const output = filtered(id);

    return output;
  }

  const handleItemsRender = (list) => {
    return handleFilterList().map((e) => (
      <div className='item-box' key={e.id}>
        <Link to={`/shop/${e.id}`}>
          <div className='item-img'>
            <img
              src={require(`../../images/${e.id}.png`)}
              alt='dragon'
              className='img-box'
            />
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
