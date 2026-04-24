import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import {Home, About, Login, Cart, Product, Orders, PlaceOrder, Collection, Contact} from './pages/index'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import Verify from './pages/Verify'
import AOS from 'aos'
import 'aos/dist/aos.css'
import ScrollToTop from './components/ScrollToTop';

function App() {

  useEffect(() => {
     AOS.init({
       duration: 800,
       easing: 'ease-out-cubic',
       once: true
     })
   }, [])
  
   return (
    <div className='px-4 sm:px-[5vw] md: px-[7vw] lg:px-[9vw]'>
      <ScrollToTop />
      <ToastContainer/>
      <Navbar/>
      <SearchBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/collection" element={<Collection/>}/>
        <Route path="/product/:productId" element={<Product/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/place-order" element={<PlaceOrder/>}/>
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/verify" element={<Verify/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
