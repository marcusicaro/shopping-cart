import React from "react";
import { Link } from "react-router-dom";

export default function Home(props) {
  return (
    <div className='home-bg'>
      <Link to='/shop'>
        <button>Shop</button>
      </Link>
    </div>
  );
}
