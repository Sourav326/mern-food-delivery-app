import { useParams } from "react-router-dom"
import ProductList from "../ProductList"
import SingleRestaurantOfferList from "../SingleRestaurantOffersList"

const SingleRestaurant = () => {
    const {id} = useParams()
    return(
        <div className="mx-auto w-full max-w-screen-xl py-16 px-6 lg:px-8 border-b">
            <h2 className="text-3xl font-semibold capitalize pb-3">Brijwasi Sweets</h2>
            <p className="capitalize text-stone-400">Dessert, South Indian</p>
            <p className="capitalize text-stone-400">a/89 Sector 16 Gurugram</p>
            <SingleRestaurantOfferList />
            <ProductList id={id} />
        </div>
    ) 
}

export default SingleRestaurant