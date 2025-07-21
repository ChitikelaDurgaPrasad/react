import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Layout, Home, AboutUs, ContactUs, Cart, Login, RequireAuth } from './index'
import {Route, RouterProvider, createRoutesFromElements, createBrowserRouter, Navigate} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<Login />} errorElement={<div>Error Element</div>} />
      <Route path="/" element={<Layout />} errorElement={<div>Error Element</div>}>
        <Route index element={<Navigate to="/home" replace/>} />
        <Route path="home" element={<Home />} errorElement={<div>Error Element</div>}/>
        <Route path="aboutUs" element={<AboutUs />} errorElement={<div>Error Element</div>}/>
        <Route path="contactUs" element={<ContactUs />} errorElement={<div>Error Element</div>}/>
      </Route>
      <Route path="/cart" element={<RequireAuth><Layout /></RequireAuth>} errorElement={<div>Error Element</div>} >
        <Route index element={<Cart />} />
      </Route> 
      <Route path="*" element={<div>404 Not Found</div>} />
    </>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
