import { Layout, Home, AboutUs, ContactUs, Cart, Login, AuthGuard, UserProfile, Unauthorized } from '../index';
import {Route, createRoutesFromElements, createBrowserRouter, Navigate} from 'react-router-dom'

export const AppRoutes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<Login />} errorElement={<div>Error Element</div>} />
      <Route path="/" element={<Layout />} errorElement={<div>Error Element</div>}>
        <Route index element={<Navigate to="/home" replace/>} />
        <Route path="home" element={<Home />} errorElement={<div>Error Element</div>}/>
        <Route path="aboutUs" element={<AboutUs />} errorElement={<div>Error Element</div>}/>
        <Route path="contactUs" element={<ContactUs />} errorElement={<div>Error Element</div>}/>
      </Route>
      <Route path="/unauth" element={<Unauthorized />} errorElement={<div>Error Element</div>} />
      <Route path="/admin" element={<AuthGuard allowedRoles={["admin"]}><Layout /></AuthGuard>} errorElement={<div>Error Element</div>} >
        <Route index element={<UserProfile />} />
      </Route> 
      <Route path="/cart" element={<AuthGuard><Layout /></AuthGuard>} errorElement={<div>Error Element</div>} >
        <Route index element={<Cart />} />
      </Route> 
      <Route path="*" element={<div>404 Not Found</div>} />
    </>
  )
)