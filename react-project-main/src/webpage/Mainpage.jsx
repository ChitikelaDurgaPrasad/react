import React,{useState} from 'react'
import Header from '../components/Header'
import Images from '../components/Images'
import Content from '../components/Content'
import Footer from '../components/Footer'
import Banner from '../components/Banner'

import {Gents } from '../data'
import {Ladies } from '../data'

const Mainpage = () => {
  const[gentleman, setGentleman]=useState(Gents)
  const[lady, setLady]=useState(Ladies)

  
  return (
    <div>
      <Header/>
      <Banner/>
      <Images value={gentleman}  />
      <Content name={lady}/>
      <Footer/>
    </div>
  )
}

export default Mainpage
