import RestaurantCard from "./RestaurantCard";
import Restaurants from "../utils/Restaurants"

const RestaurantList = () => {

  // Use slice to limit the number of records
  const topRestaurants = Restaurants.filter(restaurant => restaurant.avgRating > 4);
  
  return (
    <>
      <div className="mx-auto w-full max-w-screen-xl py-16 px-6 lg:px-8 border-y">
        <h2 className="text-3xl font-semibold capitalize pb-3">
          Top Restaurants near you
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 py-6">
            {
              topRestaurants.map((item) => (
                <RestaurantCard item={item} key={item.id} />
            ))
            }
          </div>
      </div>
    </>
  );
};

export default RestaurantList;
