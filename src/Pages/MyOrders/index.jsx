import Layout from '../../Components/Layout'
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";
function MyOrders() {
  
  const context = useContext(ShoppingCartContext)
  
  return (
    <>
      <Layout>
       MyOrders Component

       <div className="flex-col my-16 w-96 h-full">
       {
        context.order && context.order.length > 0 ? context.order.slice(-1)[0].products.map(product => (
                    <OrderCard 
                      key={product.id}
                      id={product.id}
                      title ={product.title}
                      imageUrl = {product.images}
                      price= {product.price}
                    />
                    
              ))
              : <p>No hay productos en la orden.</p>
            }
            </div>
      </Layout>
    </>
  )
}

export default MyOrders
