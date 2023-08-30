import "./styles.css"
import { XMarkIcon } from "@heroicons/react/20/solid"
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context";

const CheckoutSideMenu = () => {
    
    const { isProdDetailOpen, setVisibilityProductDetail ,productToShow} = useContext(ShoppingCartContext);
   
    

    return (
        <aside 
            className={` ${isProdDetailOpen ? 'flex' : 'hidden'} checkout-side-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white  z-20 w-[360px] h-[calc(100vh-80px)]`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">My Order</h2>
                <div>
                    <XMarkIcon  className="h-6 w-6 text-black hover:cursor-pointer"
                        onClick={() => setVisibilityProductDetail() }
                    />
                </div>
            </div>
        </aside>
    )
}

export default CheckoutSideMenu