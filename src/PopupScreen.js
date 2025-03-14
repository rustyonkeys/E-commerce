import React, { useState, } from "react";
import { useNavigate } from "react-router-dom";

const PopupScreen = () => {
  const [showModal, setShowModal] = useState(true); // Show modal on load
  const navigate = useNavigate();

  const handleRedirect = (path) => {
    setShowModal(false);
    navigate(path);
  };

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center w-96">
            <h2 className="text-2xl font-bold mb-4">Welcome!</h2>
            <p className="mb-6">Are you a Buyer or a Seller?</p>

            <div className="flex justify-around">
              <button
                onClick={() => handleRedirect("/")}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Buyer
              </button>
              <button
                onClick={() => handleRedirect("/sell")}
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
              >
                Seller
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupScreen;
