  import { useRoutes, BrowserRouter } from 'react-router-dom'
  import ShoppingCartProvider  from '../../Context'
  import Home from '../Home'
  import MyAccount from '../MyAccount'
  import MyOrder from '../MyOrder'
  import MyOrders from '../MyOrders'
  import NotFound from '../NotFound'
  import SingIn from '../SingIn'
  import Navbar from '../../Components/Navbar'
  import CheckoutSideMenu from '../../Components/CheckoutSideMenu'
  import './App.css'

  const AppRoutes = () => {
    const routes = useRoutes([
      { path: '/', element: <Home /> },
      { path: '/:name', element: <Home /> },
      { path: '/my-account', element: <MyAccount /> },
      { path: '/sing-in', element: <SingIn /> },
      { path: '/my-orders/last', element: <MyOrder /> }, 
      { path: '/my-orders/:id', element: <MyOrder /> }, 
      { path: '/my-orders', element: <MyOrders /> }, 
      { path: '/my-order', element: <MyOrder /> }, 
      { path: '/*', element: <NotFound /> },
    ]);
  
    return routes;
  };


  const App = () => {
    
    return (
      <ShoppingCartProvider>
        <BrowserRouter>
          <AppRoutes />
          <Navbar />
          <CheckoutSideMenu />
        </BrowserRouter>
      </ShoppingCartProvider>
    )
  }

  export default App
