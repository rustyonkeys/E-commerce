import React from 'react';
import Navbar from "./Navbar";  
import SortFilter from './SortFilter';



const MarketPage = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            
            <div>
                <SortFilter />
            </div>

        </div>
);
}



export default MarketPage;