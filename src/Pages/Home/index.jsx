import { useContext } from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import ProductDetail from "../../Components/ProductDetail"
import { ShoppingCartContext } from '../../Context'
function Home() {

  const context = useContext(ShoppingCartContext);
  const renderView = () => {
    
        if(context.filteredItemByTitle?.length > 0){
          return (
            context.filteredItemByTitle?.map( it => {
              return <Card key={it.id}data={it} />
            })    
          )
        }else{
          return (
            <div> Product not found !</div>
          )
        }
   
  }

  return (
    <>
      <Layout>
        <div className='flex items-center w-80  justify-center relative font-medium text-xl mb-4'>
            Products
        </div>
        <input type="text" placeholder='Search a product'
         className='border-black w-80 mb-4 p-4 border rounded-lg focus:outline-none'
         onChange={(event) => context.setSearchByTitle(event.target.value)}
         />
        <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {
          renderView()
        }
        </div>
      </Layout>
      <ProductDetail/>
    </>
  )
}

export default Home
