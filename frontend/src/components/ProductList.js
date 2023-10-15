import ProductCard from "./ProductCard"
import restroProducts from "../utils/restroProducts"

const ProductList = () => {
    const menu = restroProducts[0].data.Menu
   
    return(
        <>
        <div className="py-16 border-t">
        <h2 className="text-3xl font-semibold capitalize pb-3">
          Top menu for you
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 py-6">
            {
                menu.map((item)=>(
    
                    <ProductCard item={item}  key={item.id}/>
                ))
            }
          </div>
      </div>
        </>
    )
}

export default ProductList