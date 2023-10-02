import Layout from '../../Components/Layout'
import { useContext } from "react"
import { ChevronLeftIcon } from '@heroicons/react/20/solid';
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";
import { Link, useParams } from 'react-router-dom';
function MyOrder() {
  

    const params = useParams()   
    const currentParamId = params.id
    const context = useContext(ShoppingCartContext)

    const currentPath = window.location.pathname
    let indexOrder = currentPath.substring(currentPath.lastIndexOf('/') + 1) 
    if (indexOrder === 'last') {
      indexOrder = context.order?.length - 1 
    }else{
      indexOrder = parseInt(indexOrder) - 1
    }
  return (
    <>
      <Layout>
      <div className='flex items-center w-80  justify-center relative mb-6'>
          <Link to={`/my-orders`} className='position-absolute'>
            <ChevronLeftIcon className='h-6 w-6 cursor-pointer text-black'/>
          </Link>
          My Order
        </div>
        

       <div className="flex-col my-16 w-96 h-full">
       {
        (  context.order?.[indexOrder]?.products.map((product) => (
                    <OrderCard
                      key={product.id}
                      id={product.id}
                      title={product.title}
                      img={product.images[0]} 
                      price={product.price}
                    />
                  )))
            }
            </div>
      </Layout> 
    </>
  )
}

export default MyOrder
