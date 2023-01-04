import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Item from "./components/Item";
import NotFound from "./components/NotFound";
import Header from "./components/Header";
import "./App.css";
import ShopRoutes from "./components/ShopRoutes";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop/*' element={<ShopRoutes />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
