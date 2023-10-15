import { useDispatch } from "react-redux";
import { additem } from "../redux/slices/cartSlice";
import StarIcon from '@mui/icons-material/Star';
import toast from 'react-hot-toast';

const ProductCard = (props) => {
  const item = props.item;

  const dispatch  = useDispatch()
  const handleAddToCart = (item) => {
    // Dispatch an action
    dispatch(additem(item))
    toast.success(item.name+" Added to cart",{
        duration: 2000,
        position: 'top-center',
      
        // Styling
        style: {
            backgroundColor:'#7BFFC2',
            color:"green",
            fontWeight:600
        }
      });
  }

  return (
    <>
      <div className="rounded-lg shadow-md hover:shadow-lg hover:shadow-2xl cursor-pointer overflow-hidden group dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="h-64 w-full rounded-t-lg transition ease-linear delay-70 group-hover:-translate-y-1 group-hover:scale-105  group-hover:duration-400"
            src={item.image}
            alt="product image"
          />
        </a>
        <div className="p-5">
            <h5 className="text-lg font-bold dark:text-white">
              {item.name}
            </h5>
            <p className="text-sm text-slate-400 font-normal">{item.description}</p>
          <div className="flex py-3">
            <span className="border border-blue-200 text-blue-600 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 flex items-center">
                <span className="text-yellow-400 text-xs"><StarIcon /></span> {item.rating}
            </span>
            <span
                className={`${
                item.isVeg
                    ? "border-green-200 text-green-600 dark:bg-green-200 dark:text-green-800"
                    : "border-red-200 text-red-400 dark:bg-red-200 dark:text-red-800"
                } text-xs font-semibold mr-2 px-2.5 py-0.5 rounded flex items-center border `}
            >
                {item.isVeg ? "Veg" : "Non Veg"}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              ₹{item.price}
            </span>
            {/* <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a> */}
            <button className="py-2 px-4 border border-lime-600 text-lime-600 hover:bg-lime-600 hover:text-white rounded-md" onClick={()=>handleAddToCart(item)}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductCard;
