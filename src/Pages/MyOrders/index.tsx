import Layout from '../../Components/Layout'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { Link } from 'react-router-dom';
import  OrderCards  from '../../Components/OrderCards/index'
function MyOrders() {
  
  const context:undefined = useContext(ShoppingCartContext);
  
  return (
    
      <Layout>
        <div className='flex items-center w-80  justify-center relative font-medium text-xl mb-4'>
          My Orders 
        </div>
       {
        context.order.map( (o,index) => (
          <Link key={index} to={`/my-orders/${o.id}`}> 
            <OrderCards 
              totalPrice={o.totalPrice} 
              totalProducts={o.totalProducts}/>
          </Link>
        ))
       }
      </Layout>
    
  )
}

export default MyOrders
