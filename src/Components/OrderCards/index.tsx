// import { XMarkIcon } from "@heroicons/react/20/solid"


const OrderCards = props => {
    const { totalProducts, totalPrice} = props
   
    

    return (
        <div className="flex justify-between items-center mb-3 border border-black">
            <p>
                <span>01.01.23</span>
                <span>{totalProducts}</span>
                <span>{totalPrice}</span>
            </p>
        </div>
    )
}

export default OrderCards