import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../redux/slices/cartSlice";
import toast from 'react-hot-toast';
import CartItem from "../CartItem";
import CartSummary from "../CartSummary";
const Cart = () => {
    // subscribing to the cart using a selector
  const cartItems = useSelector((store)=> store.cart.items);

  const dispatch  = useDispatch();
  const handleClearCart = () => {
    // Dispatch an action
    dispatch(clearCart())
    toast.success("All items removed from cart",{
        duration: 2000,
        position: 'top-center',
      
        // Styling
        style: {
            backgroundColor:'#FFE76B',
            color:"red",
            fontWeight:600
        }
      });
  }
  
    return(
        <>
            <div className="mx-auto w-full max-w-screen-xl py-16 px-6 lg:px-8 border-b">
                <h2 className="text-3xl font-semibold capitalize pb-3">Shopping Cart</h2>
                <p className="capitalize text-stone-400">you have {cartItems.length} items in your cart</p>
                    {
                        cartItems.length == 0 && (
                            <div className="flex justify-center items-center h-[33vh]">
                                <h1 className="text-center text-3xl font-semibold capitalize pb-3 text-slate-500">Cart is empty</h1>
                            </div>
                        )
                    } 

                    {
                        cartItems.length > 0 && (
                            <button className="py-2 mt-2 px-4 border border-lime-600 text-lime-600 hover:bg-lime-600 hover:text-white rounded-md" onClick={handleClearCart}>
                                Empty Cart
                            </button>
                        )
                    } 
                <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12 py-6">
                    <div className="flex flex-col py-8 gap-6 col-span-2"> 
                        {
                            cartItems.map((item,index) =>(
                            <CartItem item={item}  key={index} />
                            )) 
                        }
                    </div>
                    <CartSummary cartItems={cartItems}/>
                </div>
            </div>
        </>
    )
}

export default Cart;