import React from 'react'
import {Outlet, useNavigation} from 'react-router-dom'
import { Header, Footer, Loading } from './Index'

const Layout = () => {
  const { state } = useNavigation()
  console.log("In Layout")
  if( state === 'loading'){
    return(
      <Loading />
    )
  } 
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default Layout