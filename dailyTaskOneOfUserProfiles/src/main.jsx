import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Layout, LandingPage, ErrorBoundary, LandingPagePagination, Testing} from './index'
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<Layout/>} errorElement={<div>Error occurred</div>}>
        <Route index element={<LandingPage/>} />
        <Route path='LandingPage' element={<LandingPagePagination/>}/>
        <Route path='Testing' element={<Testing/>}/>
        <Route path='*' element={<div>404 Not Found</div>} />
      </Route>
    
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
