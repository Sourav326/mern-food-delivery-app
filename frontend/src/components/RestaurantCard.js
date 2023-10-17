
import{RESTRO_URL} from "../utils/constants"
import { Link } from "react-router-dom";
import StarIcon from '@mui/icons-material/Star';

const RestaurantCard = (props,index) => {
    const data = props.item
    return(
        <>
        <div className="rounded-lg shadow-md hover:shadow-lg hover:shadow-2xl cursor-pointer overflow-hidden group relative">
            {
                data?.avgRating > 4 && (

                    <span className="absolute top-5 bg-white  text-xl font-bold px-4 z-20 rounded-r-lg">Top</span>
                )
            }
            <img src={RESTRO_URL+data?.cloudinaryImageId} alt="" className='w-full h-80 rounded-t-lg transition ease-linear delay-70 group-hover:-translate-y-1 group-hover:scale-105  group-hover:duration-400' />
            <div className='p-4 flex flex-col gap-3'>
                <div className='text-lg font-bold hover:text-lime-600'><Link to={`/restaurant/${data.id}`}>{data?.name}</Link></div>
                <div className='text-sm text-slate-400 font-normal'>{data?.cuisines.join(', ')}</div>
                <div className='text-sm text-slate-400 font-bold'>{data?.costForTwo}, <span className='text-sm text-slate-300'>{data?.areaName}</span></div>
                
                <div className="flex py-3">
                    <span className="border border-blue-200 text-blue-600 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 flex items-center">
                        <span className="text-yellow-400 text-xs"><StarIcon /></span> {data?.avgRating}
                    </span>
                    <span
                        className={`${
                        data?.veg
                            ? "border border-green-200 text-green-600 dark:bg-green-200 dark:text-green-800"
                            : " "
                        } text-xs font-semibold mr-2 px-2.5 py-0.5 rounded flex items-center `}
                    >
                        {data?.veg ? "Veg" : " "}
                    </span>
                </div>
            </div>
        </div>
        </>
    )
}

export default RestaurantCard


