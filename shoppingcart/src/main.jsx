import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Layout, Home, Cart, Login } from './index'
import {Route, RouterProvider, createRoutesFromElements, createBrowserRouter, Navigate} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    // <Route path='/' element={<Layout />} errorElement={<div>Error Element</div>}>
    //   <Route index element={<Home />}></Route>
    //   <Route path='home' element={<Home />}/>
    //   <Route path='*' element={<div>404 Not Found</div>}/>
    // </Route>
    <>
      <Route path="/login" element={<Login />} errorElement={<div>Error Element</div>} />
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/app" element={<Layout />} errorElement={<div>Error Element</div>}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} errorElement={<div>Error Element</div>}/>
        <Route path="cart" element={<Cart />} errorElement={<div>Error Element</div>} />
      </Route>
      {/* Catch-all 404 route - no layout, no header/footer */}
      <Route path="*" element={<div>404 Not Found</div>} />
    </>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
