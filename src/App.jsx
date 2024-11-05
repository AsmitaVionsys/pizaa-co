import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './ui/Home'
import Menu from './features/menu/Menu'
import CreateOrder from './features/order/CreateOrder'
import Order from './features/order/Order'
// import User from './features/user/User'
import Cart from './features/cart/Cart'

const router = createBrowserRouter( [
    { path: '/', element: <Home/> },
    { path: '/menu', element: <Menu /> },
    { path: '/order/new', element: <CreateOrder /> },
    { path: '/order/:orderId', element: <Order /> },
    // { path: '/user', element: <User /> },
    { path: '/cart', element: <Cart /> },
  ],
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
