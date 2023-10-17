import { useEffect, useState } from "react"
import ProductCard from "./ProductCard"
import axios from "axios"
import RestaurantShimmer from "./shimmer/RestaurantShimmer"

const ProductList = (params) => {
  
    const [menu, setMenu] = useState([])

    const getProducts = async () => {
        try {
          const res = await axios.get(`http://localhost:3001/api/restaurant/${params.id}`);
          setMenu(res.data);
        } catch (error) {
            console.log(error.message);
        }
      };
    
      useEffect(() => {
        getProducts();
      }, []);
   
    return menu.length == 0 ? (
    <RestaurantShimmer />
    ) : (
        <>
        <div className="py-16 border-t">
        <h2 className="text-3xl font-semibold capitalize pb-3">
          Top menu for you
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 py-6">
            {
                menu.map((item)=>(
    
                    <ProductCard item={item}  key={item.id}/>
                ))
            }
          </div>
      </div>
        </>
    )
}

export default ProductList