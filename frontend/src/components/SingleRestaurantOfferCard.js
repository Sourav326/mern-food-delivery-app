import discount from "../images/discount.png"

const SingleRestaurantOfferCard = (props) => {
    return(
        <>
        <div className="border border-lime-600 px-6 py-2 rounded-lg border-lime flex gap-4">
            <img src={discount} alt="discount icon" className="w-10" />
            <div>
                <div className="capitalize font-2xl font-semibold">{props.item.offer}</div>
                <div className="uppercase text-stone-500 text-sm">{props.item.code}</div>
            </div>
        </div>
        </>
    )
}

export default SingleRestaurantOfferCard