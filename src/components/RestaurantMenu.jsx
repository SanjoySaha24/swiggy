import {useState, useEffect } from "react"
import Shimmer from "./Shimmer";
// import useRestaurantMenu from "../utils/useRestaurantMenu" ep 9, 24:00
// import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
const [resInfo, setResInfo] = useState(null);
// const {resId} = useParams()
// const resInfo = useRestaurantMenu(resId);

if(resInfo == null)
  return
<Shimmer />

 useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch("https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&submitAction=ENTER&restaurantId=766502"); // 766502 theobaram
    // const data = await fetch("https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&submitAction=ENTER&restaurantId="+resId); // 1:59:00 ep7
    // const data = await fetch("https://swiggy-api-4c740.web.app/swiggy-api.json");
    // const data = await fetch("https://pastebin.com/raw/0QcdEDBL");
    // const data = await fetch("https://raw.githubusercontent.com/namastedev/namaste-react/refs/heads/main/swiggy-api");
    const json = await data.json();
    console.log(json);
    setResInfo(json.data)
  }

// to check whether api giving response or not
//   const fetchMenu = async () => {
//   try {
//     const data = await fetch("https://swiggy-api-4c740.web.app/swiggy-api.json");
//     const json = await data.json();
//     console.log("API Response:", json);
//   } catch (err) {
//     console.log("Fetch error:", err);
//   }
// }

const itemCards =
  resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[10]
    ?.card?.card?.categories?.[0]?.itemCards || [];

  return (
    <div className="menu">
    <h1>{resInfo?.cards[2]?.card?.card?.info.name}</h1>
    <h3>{resInfo?.cards[2]?.card?.card?.info.cuisines.join(", ")} - {resInfo?.cards[2]?.card?.card?.info.costForTwoMessage}</h3>
  <h3>{resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[10]?.card?.card?.categories[0]?.itemCards[0]?.card?.info?.description}</h3>
     
  <ul>
  {/* <li>{resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[10]?.card?.card?.categories[0]?.itemCards[0]?.card?.info?.name}</li> */}
  {itemCards.map((item) => (
    <li key={item?.card?.info?.id}>{item?.card?.info?.name} - Rs {item?.card?.info?.price/100}</li>
  ))}
</ul>
    </div> 
  );
}

export default RestaurantMenu;