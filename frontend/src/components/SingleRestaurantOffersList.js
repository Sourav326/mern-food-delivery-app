import SingleRestaurantOfferCard from "./SingleRestaurantOfferCard"
import restaurantOffers from "../utils/restaurantOffers"

const SingleRestaurantOfferList = () => {
    return(
        <>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 py-8">
            {
            restaurantOffers.map((item) => (
                <SingleRestaurantOfferCard item={item} key={item.id} />
            ))
            }
        </div>
        </>
    )
}

export default SingleRestaurantOfferList


