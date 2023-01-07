import React from "react";
import { Link } from "react-router-dom";
import ParticleBackground from "../ParticleBackground";

export default function Home(props) {
  return (
    <div className='container home-bg'>
      <div style={{ zIndex: 2 }} className='vertical-center'>
        <h1>Shenlong Store</h1>
        <h3>Visit the only place where you can buy a dragon</h3>
        <Link to='/shop'>
          <button className='btn btn-border-pop'>Enter the Dragon</button>
        </Link>
      </div>
      <ParticleBackground />
      <img
        src={require("../../images/goldenDragon-removebg.png")}
        alt='golden dragon background'
        className='golden-dragon'
      />
    </div>
  );
}
