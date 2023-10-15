import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import product1 from "../images/product1.avif";
import data from "../utils/mockData"
import{IMAGE_URL} from "../utils/constants"
const Carausel = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 10,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <>
      <div className="mx-auto w-full max-w-screen-xl py-16 px-6 lg:px-8">
        <h2 className="text-3xl font-semibold capitalize">
          Best foods for you
        </h2>
        <Carousel 
        responsive={responsive} 
        autoPlay={true}
        infinite={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        className="pt-8 lg:py-8">
            {
                data.map((item) => (
                    <div className="w-40 lg:w-40 cursor-pointer" key={item.id}>
                        <img className="rounded-full" src={IMAGE_URL+item.imageId} alt={product1} />
                    </div>
                ))
            }
        </Carousel>
      </div>
    </>
  );
};

export default Carausel;
