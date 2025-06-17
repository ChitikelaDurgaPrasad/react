import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Home, FailPage, SucessPage, Layout} from '../index.js'
import { Route,createBrowserRouter,createRoutesFromElements, RouterProvider } from 'react-router-dom'

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>} />
      <Route path='fail' element={<FailPage/>} />
      <Route path='success' element={<SucessPage/>} />
    </Route>
    // <>
    //   <Route path='/' element={<Home />} />
    //   <Route path='/fail' element={<FailPage />} />
    //   <Route path='/success' element={<SucessPage />} />
    // </>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
