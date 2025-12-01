import { useState, useEffect } from 'react';
import RestaurantCard from './RestaurantCard';
import './Body.css';
import resList from '../utils/mockData';

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(resList);

  useEffect(() => {
  console.log("useeffect called");
  
}, [])

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4.6
            );
            setListOfRestaurant(filteredList);
          }}>
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard resData={restaurant} key={restaurant.info.id} />
        ))}

      </div>
    </div>
  );
};

export default Body;