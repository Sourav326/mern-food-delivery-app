import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import offers from "../utils/offers";
import Client1 from '../images/client1.webp'
import {OFFER_URL} from "../utils/constants"
const RestroCarausel = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <div className="mx-auto w-full lg:w-[50rem]">
        <Carousel 
        responsive={responsive} 
        removeArrowOnDeviceType={["tablet", "mobile"]}
        autoPlay={true}
        infinite={true}
        className="py-8">
            {
                offers.map((item) => (
                    <div className="h-44 lg:h-80 w-full cursor-pointer px-4" key={item.id}>
                        <img className="h-full w-full rounded-3xl" src={OFFER_URL+item.imageId} alt={OFFER_URL+item.imageId} />
                    </div>
                ))
            }
        </Carousel>
      </div>
    </>
  );
};

export default RestroCarausel;
