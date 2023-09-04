import { XMarkIcon } from "@heroicons/react/20/solid"


const OrderCard = props => {
    const { id,title, price, imageUrl, handleDelete} = props
   
    

    return (
        <div className="flex justify-between items-center mb-3">
            <div className=" flex items-center gap-2">
                <figure className=" w-20 h-20 p-">
                    <img src={imageUrl} alt={title} className="w-full h-full object-cover rounded-lg" />
                </figure>
                <p className=" text-sm font-light">{title}</p>
            </div>

            <div className=" flex items-center gap-2">
                <p className=" text-lg font-medium">$ {price}</p>
                <XMarkIcon 
                    className="h-6 w-6 text-black hover:cursor-pointer"
                    onClick={ () => handleDelete(id)}
                    />
            </div>
        </div>
    )
}

export default OrderCard