import React from "react"; 


const Category = () => {
    return(
        <div className= "py-8 px-6">
            <div className = "container">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* First col 1 */}
                    <div className="py-10 pl-5 bg-gradient-to-br from-black/90
                    to-black/60 rounded-lg text-white rounded-3xl relative h-[320px]
                    flex items-end">
                        <div>
                            <div className="mb-4">
                            
                                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-6" >CPU</p>
                                <button className="bg-primary text-white bg-red-900 border-red-900 border p-2 rounded-lg ">
                                    Browse Now    
                                </button>
                            </div>
                        </div>
                        <img src = "https://img.pikbest.com/ai/illus_our/20230427/3e504d41948783e4d4fcd773445f3048.jpg!w700wp"
                        alt="" className="w-[220px] h-[120px] rounded-lg absolute top-6 left-1/2 transform -translate-x-1/2"/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}



export default Category;