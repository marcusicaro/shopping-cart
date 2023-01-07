import React from "react";
import { Link } from "react-router-dom";

export default function Home(props) {
  return (
    <div className='container home-bg'>
      <div className='vertical-center'>
        <h1>Shenlong Store</h1>
        <h3>Visit the only place where you can buy a dragon</h3>
        <Link to='/shop'>
          <button className='home-btn'>Enter the Dragon</button>
        </Link>
      </div>
    </div>
  );
}
