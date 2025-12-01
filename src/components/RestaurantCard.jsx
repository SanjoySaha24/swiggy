import './RestaurantCard.css'

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    cuisines,
    locality,
    avgRating,
    costForTwo,
    cloudinaryImageId,
    sla
  } = resData.info;

  return (
    <div className="res-card">
      <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/" + cloudinaryImageId} />
      <h4>{name}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{locality}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  )
}

export default RestaurantCard