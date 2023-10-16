import CloseIcon from '@mui/icons-material/Close';
import { useDispatch} from "react-redux";
import { removeItem } from "../redux/slices/cartSlice";
import toast from 'react-hot-toast'


const CartItem = (props) => {
    const item = props.item
    const dispatch  = useDispatch();
    const handleRemoveItem = (item) => {
        // Dispatch an action
        dispatch(removeItem(item))
        toast.success(item.name+" Removed from cart",{
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
         <div className="flex flex-col lg:flex-row justify-between items-center p-3 rounded-lg shadow-[0_.5rem_1rem_5px_rgba(0,0,0,.15)] border-0 bg-white">
            <div className="flex gap-2 w-full lg:w-3/4">
                <img className="" src={item?.image} alt={item?.image} width="100px"/>
                <div className="flex flex-col justify-between">
                    <h2 className="text-md font-bold hover:text-lime-600">{item?.name}</h2>
                    <p className="text-sm capitalize text-slate-500">{item?.description}</p>
                </div>
            </div>
            <div className="flex pt-3 lg:pt-0 justify-between lg:justify-around w-full">
                <span className="font-bold">₹{item?.price}</span>
                <span className="font-bold">{item?.quantity}</span>
                <span className="font-bold">₹{item?.price * item?.quantity}</span>
                <span onClick={() => handleRemoveItem(item)} className="flex items-center font-bold text-red-500 hover:text-red-800 hover:cursor-pointer">Remove <CloseIcon /></span>
            </div>
        </div>
        </>
    )
} 

export default CartItem