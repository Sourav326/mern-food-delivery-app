import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';
import FoodBankOutlinedIcon from '@mui/icons-material/FoodBankOutlined';
import WhereToVoteOutlinedIcon from '@mui/icons-material/WhereToVoteOutlined';
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import axios from 'axios';
import RestaurantShimmer from './shimmer/RestaurantShimmer';

const RestaurantListWithFilters = (props) => {

    const [restaurantsList,setRestaurantsList] = useState([])
  const [filterRestaurant,setFilterRestaurant] = useState([])
   
  const getRestaurants = async () => {
    try {
      const res = await axios.get("https://mern-food-delivery-app.vercel.app/api/restaurants");
      setRestaurantsList(res.data);
      setFilterRestaurant(res.data);
    } catch (error) {
        console.log(error.message);
    }
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  const handleFilter = (filterValue) => {
    if(filterValue === 'top'){
      const topRestro = restaurantsList.filter(restaurant => restaurant.avgRating > 4)
      setFilterRestaurant(topRestro);
    } else if(filterValue === 'all'){
      const allRestro = restaurantsList
      setFilterRestaurant(allRestro);
    } else {
      const setor15Restro = restaurantsList.filter(restaurant => restaurant.areaName.toLowerCase().includes(filterValue.toLowerCase()));
      setFilterRestaurant(setor15Restro);
    }
  }

  //Filter the Restro with search value
  const [searchText, setSearchtext] = useState("")
  const handleSearch = () => {
    const searchRestro = restaurantsList.filter(restaurant => restaurant.name.toLowerCase().includes(searchText.toLowerCase()));
    if(searchRestro.length > 0){
      setFilterRestaurant(searchRestro)
    } else {
      setFilterRestaurant([])
    }
  }

    return restaurantsList.length == 0 ?(
        <RestaurantShimmer />
    ) :(
        <>
         <h2 className="text-3xl font-semibold capitalize pb-3">
        {props.title}
        </h2>
        <div className="grid grid-cols-4 lg:grid-cols-10 py-3">
            <div className="flex justify-left gap-1 items-center hover:bg-lime-600 py-2 px-3 hover:text-white cursor-pointer rounded-lg" onClick={() => handleFilter('all')}>
                <FoodBankOutlinedIcon />
                <span className="capitalize">All</span>
          </div>
            <div className="flex justify-left gap-1 items-center hover:bg-lime-600 py-2 px-3 hover:text-white cursor-pointer rounded-lg " onClick={() => handleFilter('top')}>
                <FastfoodOutlinedIcon />
                <span className="capitalize">Top </span>
          </div>
            <div className="col-span-2 lg:col-span-1 flex justify-left gap-1 items-center hover:bg-lime-600 py-2 px-3 hover:text-white cursor-pointer rounded-lg " onClick={() => handleFilter('sector 15')}>
                <WhereToVoteOutlinedIcon />
                <span className="capitalize">Sector 15</span>
          </div>
          <div className="col-start-1 lg:col-start-6 col-span-7 flex gap-3 pt-6 lg:pt-0">
            <input type="search" name="search" className="p-2 border rounded w-full" value={searchText} onChange={(e) => {
              setSearchtext(e.target.value)
            }} />
            <button className="py-2 px-4 border border-lime-600 text-lime-600 hover:bg-lime-600 hover:text-white rounded-md" onClick={handleSearch}>Search</button>
          </div>
        </div>
            {
                filterRestaurant.length == 0 && (
                    <h1 className="text-center text-3xl font-semibold capitalize pb-3 text-slate-500 py-6">No Restaurants Available</h1>
                )
            }
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 py-6">
            {filterRestaurant.map((item, index) => (
              <RestaurantCard item={item} key={index} />
            ))}
          </div>
        </>
    )
}

export default RestaurantListWithFilters