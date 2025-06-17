import React from 'react'
import ReactDom from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App, Layout, Home, About, Contact, User, GitHub, githubInfoLoader, Loading } from './Index'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route index element={<Home />} />
      <Route path='home' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='user' element={<User />}>
        <Route path=':userId' element={<User />} />
      </Route>
      <Route path='contact' element={<Contact />} />
      <Route
        loader={githubInfoLoader}
        errorElement={<div>Error occured</div>}
        path='github' element={<GitHub />} />
      <Route path='*' element={<div>404 Not Found</div>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
