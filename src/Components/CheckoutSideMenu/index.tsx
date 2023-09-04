import "./styles.css"
import { XMarkIcon } from "@heroicons/react/20/solid"
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../OrderCard";
import { totalPrice } from "../../utils";
const CheckoutSideMenu = () => {
    
    const { isCheckOutOpen, setVisibilityCheckOut , cartProducts,setCartProducts} = useContext(ShoppingCartContext);
   
    const context = useContext(ShoppingCartContext);
    
    const handleDelete = (id) => {
        const filterProducts = cartProducts.filter(product => product.id != id)
        setCartProducts(filterProducts)

    }

    return (
        <aside 
            className={` ${isCheckOutOpen ? 'flex' : 'hidden'} checkout-side-detail flex flex-col fixed top-20 right-0 border border-black rounded-lg bg-white  z-20 w-[360px] h-[calc(100vh-80px)]`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">My Order</h2>
                <div>
                    <XMarkIcon  className="h-6 w-6 text-black hover:cursor-pointer" onClick={() => setVisibilityCheckOut() } />
                </div>
            </div>

            <div className="px-6 overflow-y-scroll">
                {
                    context.cartProducts.map(product => (
                        <OrderCard 
                            key={product.id}
                            id={product.id}
                            title={product.title} 
                            imageUrl={product.images} 
                            price={product.price} 
                            handleDelete={handleDelete}
                            />
                    ))
                }
            </div>

            <div className="px-6">
                <p className="flex justify-between items-center">
                    <span className="font-ligth">Total: </span>
                    <span className="font-medium text-2xl">$ {totalPrice(context.cartProducts)}</span>
                </p>
            </div>
        </aside>
    )
}

export default CheckoutSideMenu