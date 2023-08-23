import { useEffect, useState } from 'react'

import Layout from '../../Components/Layout'
import Card from '../../Components/Card'

function Home() {
  const [item, setItem] = useState(null);
  
  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
    .then(response => response.json())
    .then(data => setItem(data))
  })

  return (
    <>
      <Layout>
        Home component
        <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {
          item?.map( it => {
            return <Card key={it.id}data={it} />
          })
        }
        </div>
      </Layout>
    </>
  )
}

export default Home
