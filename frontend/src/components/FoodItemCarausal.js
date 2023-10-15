import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "./ProductCard"
import restroProducts from "../utils/restroProducts"

const FoodItemCarausal = (props) => {
    const menu = restroProducts[0].data.Menu
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 4,
          partialVisibilityGutter: 40
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          partialVisibilityGutter: 40
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      };
    return(
        <>
        <h2 className="text-3xl font-semibold capitalize pb-3">
          {props.title}
          </h2>
            <Carousel 
                responsive={responsive} 
                autoPlay={true}
                infinite={true}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                className="py-6">
                    {
                        menu.map((item,index)=>(
                          <div className="px-3" key={index}>
                            <ProductCard item={item}  />
                          </div>
                        ))
                    }
            </Carousel>
        </>
    )
}

export default FoodItemCarausal