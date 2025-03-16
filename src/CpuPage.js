import React from 'react';
import Navbar from "./Navbar";
import SortFilter from './CpuSort';


const CpuPage = () => {
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






export default CpuPage;