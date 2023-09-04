import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { CheckIcon, PlusIcon } from "@heroicons/react/20/solid"
const Card = (data) => {
    const {count, setCount, setVisibilityProductDetail,setVisibilityCheckOut, setProductToShow, isProdDetailOpen, isCheckOutOpen,setCartProducts, cartProducts} = useContext(ShoppingCartContext)
    
    const showProduct = (productDetail) => {
        if(!isProdDetailOpen){
            setVisibilityProductDetail()
        }
        if(isCheckOutOpen){
            setVisibilityCheckOut();     
        }
        setProductToShow(productDetail)
    }

    const addProduct = (event,productData) => {
        event.stopPropagation();
        setCount(count + 1)
        if (Array.isArray(cartProducts)) {
            setCartProducts([...cartProducts, productData]);
        } else {
            setCartProducts([productData]);
        }
        if(!isCheckOutOpen){
            setVisibilityCheckOut()
        }
        if(isProdDetailOpen){
            setVisibilityProductDetail()
        }

    }


    const checkIcon = (id) => {
        const isInCart = cartProducts.filter(product => product.id === id).length > 0;
        if(isInCart){
            return (
                 <div className="absolute top-0 mt-2 mr-2 right-0 flex justify-center items-center bg-black h-6 w-6 rounded-full m-2 p-1" >
                        <CheckIcon className="h-6 w-6  text-green-600" />
                    </div>
            )
        }else{
            return (
                    <div 
                        className="absolute top-0 mt-2 mr-2 right-0 flex justify-center items-center bg-white h-6 w-6 rounded-full m-2 p-1" 
                        onClick={(event) => {
                            addProduct(event,data.data)
                        }}>
                        <PlusIcon className="h-6 w-6 text-black" />
                    </div>
            )
        }
    }

    return (
        <div className="bg-white cursor-pointer w-56 h-60 rounded-lg"
            onClick={() => showProduct(data.data)}
        >
            <figure className="relative mb-2 h-4/5 w-full">
                <span className="absolute rounded-lg bg-white/60 bottom-0 left-0 text-black text-xs m-2 px-2 py-0.5">{data.data.category.name}</span>
                    <img className="w-full h-full object-cover rounded-lg" src={data.data.images} alt="headphones" />
                    {checkIcon(data.data.id)}
            </figure>
            <p className="flex justify-between">
            <span className=" text-sm font-light mb-2">{data.data.title}</span>
            <span className=" text-lg font-medium">
                $ {data.data.price}
            </span>
            </p>
        </div>

    )
}

export default Card