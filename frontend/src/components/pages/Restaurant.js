
import RestroCarausel from "../RestroCarausel";
import offer2 from "../../images/hero-thumb.png"
import RestaurantListWithFilters from "../RestaurantListWithFilters";

const Restaurant = () => {

  
  return (
    <>
      <div className="mx-auto w-full max-w-screen-xl py-16 px-6 lg:px-8 border-b">
            <h1 className="text-3xl font-semibold capitalize">Best offers for you </h1>
            <div className="flex flex-col lg:flex-row lg:items-center justify-between lg:gap-24 py-10 lg:pb-10">
                <div className="flex flex-col justify-center lg:w-96 px-2">
                    <img className="w-full drop-shadow-[0px_5px_20px_red]" src={offer2} alt={offer2} />
                </div>
                <RestroCarausel />
            </div>
            <RestaurantListWithFilters  title="Restaurants with online food delivery"/>

      </div>
    </>
  );
};

export default Restaurant;
