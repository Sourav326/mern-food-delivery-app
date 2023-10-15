
import BenefitCard from './BenefitCard';
import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import SoupKitchenOutlinedIcon from '@mui/icons-material/SoupKitchenOutlined';

const Benefits = () => {
    
    return(
        <>
        <div className="grid grid-cols-1 lg:grid-cols-4 py-8 gap-8 lg:py-20 px-4">
            <BenefitCard icon={<FastfoodOutlinedIcon sx={{ fontSize: 60 }} color="success"/>} title="free delivery" desc="Cras fermentum odio eu feugiat pretium nibh ipsum. Ut faucibus pulvinar elementum consequat integer enim neque volutpat." />
            <BenefitCard icon={<WatchLaterOutlinedIcon sx={{ fontSize: 60 }} color="success"/>} title="save your time" desc="Cras fermentum odio eu feugiat pretium nibh ipsum. Ut faucibus pulvinar elementum consequat integer enim neque volutpat." />
            <BenefitCard icon={<SellOutlinedIcon sx={{ fontSize: 60 }} color="success"/>} title="Regular discount" desc="Cras fermentum odio eu feugiat pretium nibh ipsum. Ut faucibus pulvinar elementum consequat integer enim neque volutpat." />
            <BenefitCard icon={<SoupKitchenOutlinedIcon sx={{ fontSize: 60 }} color="success"/>} title="Variety food" desc="Cras fermentum odio eu feugiat pretium nibh ipsum. Ut faucibus pulvinar elementum consequat integer enim neque volutpat." />
       </div>
        </>
    )
}
export default Benefits