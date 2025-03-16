import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login_Register/Login";
import Register from "./Login_Register/Register";
import Homepage from "./HomePage.js";
import SellerPage from "./SellerPage"; 
import CpuPage from "./CpuPage";
import Wishlist from "./WhishlistPage";
import CartPage from "./CartPage.js"; 
import MarketPage from "./MarketPage.js";


function App() {
  return (
    
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/sell" element={<SellerPage />} /> 
        <Route path="/marketplace/category/CPU" element={<CpuPage />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/marketplace" element={<MarketPage />} />
      </Routes>
      
    
  );
};

export default App;
