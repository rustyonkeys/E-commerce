import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./HomePage";
import SellerPage from "./SellerPage"; // ✅ Import Seller Page

const App = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sell" element={<SellerPage />} /> 
      </Routes>
    
  );
};

export default App;
