import { XMarkIcon } from "@heroicons/react/20/solid"


const OrderCard = props => {
    const { id,title, price, imageUrl, handleDelete} = props
   
    

    return (
        <div className="flex justify-between items-center mb-3">
            <div className=" flex items-center gap-2">
                <figure className=" w-20 h-20 p-">
                    <img src={imageUrl} alt={title} className="w-full h-full object-cover rounded-lg" />
                </figure>
                <p className="text-sm font-light mx-4">{title}</p>
            </div>

            <div className=" flex items-center gap-2">
                <p className=" text-lg font-medium">$ {price}</p>
                {
                    handleDelete &&                 
                    <XMarkIcon
                    onClick={()=>handleDelete(id)}
                    className="h-4 w-4 text-black cursor-pointer "/>
                }
            </div>
        </div>
    )
}

export default OrderCard