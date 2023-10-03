import "./styles.css"
import { XMarkIcon } from "@heroicons/react/20/solid"
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context";

const ProductDetail = () => {
    const { isProdDetailOpen, setVisibilityProductDetail ,productToShow} = useContext(ShoppingCartContext);

   
    

    return (
        <aside 
            className={` ${isProdDetailOpen ? 'flex' : 'hidden'} product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white  z-20 w-[360px] h-[calc(100vh-80px)]`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">Detail</h2>
                <div>
                    <XMarkIcon  className="h-6 w-6 text-black hover:cursor-pointer"
                        onClick={() => setVisibilityProductDetail() }
                    />
                </div>
            </div>

            <figure>
                <img  
                    className="w-full h-full rounded-lg" 
                    src={productToShow.images} 
                    alt={productToShow.title} />
            </figure>

            <p className="flex flex-col p-6">
                <span className="font-medium text-md"><strong>{productToShow.title}</strong></span>
                <span className="font-ligth text-sm" >{productToShow.description}</span>
                <span className="font-medium text-xl" >${productToShow.price}</span>
            </p>
        </aside>
    )
}

export default ProductDetail