import Layout from '../../Components/Layout'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { Link } from 'react-router-dom';
import  OrderCards  from '../../Components/OrderCards/index'
function MyOrders() {
  
  const context:undefined = useContext(ShoppingCartContext);
  console.log(context);
  
  return (
    
      <Layout>
        <div className='flex items-center w-80  justify-center relative'>
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
