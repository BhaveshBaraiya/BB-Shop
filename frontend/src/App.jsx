import React from 'react'
import { Routes, Route } from 'react-router-dom'
import {Home, About, Login, Cart, Product, Orders, PlaceOrder, Collection, Contact} from './pages/index'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className='px-4 sm:px-[5vw] md: pc-[7vw] lg: px-[9vw]'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/collection" element={<Collection/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/placeOrder" element={<PlaceOrder/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
