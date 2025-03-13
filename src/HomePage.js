import React from "react";
import Navbar from "./Navbar";
import Slider from "./Slider";
import Bottomhomepage from "./Bhomepage";
import PopupScreen from "./PopupScreen";




const Homepage = () => {
    return(
        <div className="min-h-screen bg-gray-100">  

            <div>
                <Navbar />
            </div>
            
            <div>
               <Slider /> 
            </div>
            <div>
                <Bottomhomepage />
            </div>
                
          
            <PopupScreen />

        </div>
        
    );
};

export default Homepage;