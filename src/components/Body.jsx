// import resList from '../utils/mockData';
import { useState, useEffect } from 'react';
import RestaurantCard from './RestaurantCard';
import './Body.css';
import Shimmer from './Shimmer';
import useOnlineStatus from '../utils/useOnlineStatus';

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("")

  // whenever state variable update, react triggers a reconciliation cycle (re-renders the component)

   useEffect(() => {
    fetchData();  
      }, [])

  const fetchData = async () => {
    const data = await fetch("https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING")
    // const data = await fetch("https://swiggy-api-4c740.web.app/swiggy-api.json")
    // const data = await fetch(
    //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.08950&lng=80.27390&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    // )
    const json = await data.json()

    console.log(json);
    // optional chaining
    // setListOfRestaurant(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [])
    // setListOfRestaurant(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [])
     setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [])
    setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [])
  }

const onlineStatus = useOnlineStatus()

if(onlineStatus === false)
  return <h1>Looks like you are offline Please check your internet connection</h1>

  return listOfRestaurants.length == 0 ? (<Shimmer />) :(
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" 
          className="search-box" 
          value={searchText} 
          onChange={(e) => {
            setSearchText(e.target.value)
            }}
          />
          <button onClick={() => {
          const filteredRestaurant = listOfRestaurants.filter(
            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
            setFilteredRestaurant(filteredRestaurant)
          }}>Search</button>
        </div>

        <button className="filter-btn"
          onClick={() => {
  const filteredList = listOfRestaurants.filter(
    (res) => res.info.avgRating > 4.5
  );
  setFilteredRestaurant(filteredList);
}}>
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard resData={restaurant} key={restaurant.info.id} />
        //  <Link key={restaurant.info.id} to={"/restaurants/"+ restaurant.info.id}><RestaurantCard resData={restaurant}/> </Link>
        ))}

      </div>
    </div>
  );
};

export default Body;