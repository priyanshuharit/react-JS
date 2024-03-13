import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockdata";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body=()=>{
    const [RestuarantList,setRestuarantList] = useState([]);
    const [searchText,setSearchText]= useState("");
    const [filter,setfilter]= useState([]);
    // filter=RestuarantList;
    // when ever state Variable update,react triggers a reconciliation cycle(re-render the component)


    useEffect(()=>{
        fetchData();

    },[]);

    const fetchData= async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.9844618&lng=77.7064137&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

        );

        const json = await data.json();

        console.log(json);
        // optional chaining
        setRestuarantList(json?.data?.cards[1]?.card?.card?.gridElements?.
            infoWithStyle?.restaurants
            );
        setfilter(json?.data?.cards[1]?.card?.card?.gridElements?.
            infoWithStyle?.restaurants);
    };

    // conditional rending
   
    
    return RestuarantList.length=== 0?(  <Shimmer/>):(
        <div className="body">

            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);


                    }}/>
                    <button onClick={()=>{
                        // Filter the restraunt cards and update the UI
                        // searchText

                        const filteredRestuarant =RestuarantList.filter(
                            (res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setfilter(filteredRestuarant);
                        
                    }}>search</button>
                </div>
                <button 
                className="filter-btn" 
                onClick={()=>{
                    const filteredList= RestuarantList.filter(
                        (res) => res.info.avgRating >4.2
                    );
                    setRestuarantList(filteredList);
                    setfilter(filteredList);
                     
                }}>Top Rated</button>
            </div>
            <div className="res-container">
                {filter.map((restuarant)=>(
                <RestaurantCard key={restuarant.info.id} 
                resData={restuarant} // using unique key is important to avoid re-rendering of the previous data  
                />))};
                 
                


            </div>
        </div>

    );
};

export default Body;