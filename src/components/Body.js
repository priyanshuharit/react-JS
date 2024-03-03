import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";
import { useState } from "react";

const Body=()=>{
    const [RestuarantList,setRestuarantList] = useState(resList);
    return(
        <div className="body">

            <div className="filter">
                <button 
                className="filter-btn" 
                onClick={()=>{
                    const filteredList= RestuarantList.filter(
                        (res) => res.info.avgRating >4
                    );
                    setRestuarantList(filteredList);
                     
                }}>Top Rated</button>
            </div>
            <div className="res-container">
                {RestuarantList.map((restuarant)=>(
                <RestaurantCard key={restuarant.info.id} resData={restuarant} // using unique key is important to avoid re-rendering of the previous data  
                />))};
                 
                


            </div>
        </div>

    );
};

export default Body;