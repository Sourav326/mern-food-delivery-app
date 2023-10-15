import { useSelector } from "react-redux";

const CartSummary = (props) => {
    const total = useSelector((store)=> store.cart.total);
    const shipping = useSelector((store)=> store.cart.shipping_fee);
    return(
        <>
        {
            props.cartItems.length > 0 && (
                <div className="py-8 ">
                <h2 className="text-2xl font-semibold capitalize pb-3 border-b">Summary</h2>
                <div className="flex flex-col py-10">
                    <div className="pb-6 flex justify-between font-semibold">
                        <p className="uppercase text-lg">items {props.cartItems.length}</p>
                        <p>₹{total}</p>
                    </div>
                    <div className="pb-6 flex justify-between font-semibold">
                        <p className="uppercase text-lg">shipping</p>
                        <p>₹{shipping}</p>
                    </div>
                    <div className="pb-6 flex justify-between font-semibold">
                        <p className="uppercase text-lg font-bold">Total</p>
                        <p>₹{shipping+total}</p>
                    </div>
                    <button className="py-3 px-8 bg-lime-600 text-white">Checkout</button>
                </div>
                </div>
                 )
                } 
        </>
    )
}

export default CartSummary