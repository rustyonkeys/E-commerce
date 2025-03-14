import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login_Register/Login";
import Register from "./Login_Register/Register";
import Homepage from "./HomePage";
import SellerPage from "./SellerPage"; 
function App() {
  return (
    
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/sell" element={<SellerPage />} /> 
      </Routes>
      
    
  );
};

export default App;
