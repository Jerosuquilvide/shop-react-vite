const Card = (data) => {
    return (
        <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
            <figure className="relative mb-2 h-4/5 w-full">
                <span className="absolute rounded-lg bg-white/60 bottom-0 left-0 text-black text-xs m-2 px-2 py-0.5">{data.data.category.name}</span>
                    <img className="w-full h-full object-cover rounded-lg" src={data.data.category.image} alt="headphones" />
                    <div className="absolute top-0 mt-2 mr-2 right-0 flex justify-center items-center bg-white h-6 w-6 rounded-full m-2 p-1" >+</div>
            </figure>
            <p className="flex justify-between">
            <span className=" text-sm font-light mb-2">{data.data.title}</span>
            <span className=" text-lg font-medium">$ {data.data.price}</span>
            </p>
        </div>

    )
}

export default Card