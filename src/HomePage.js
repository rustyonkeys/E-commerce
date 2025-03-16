import React from "react";
import Navbar from "./Navbar";
import Slider from "./Slider";
import PopUpScreen from "./PopUpScreen";
import Bhomepage from "./Bhomepage";




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
                <Bhomepage />
            </div>
                
          
            <PopUpScreen />

        </div>
        
    );
};

export default Homepage;