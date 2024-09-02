import React from 'react'
import "./App.css"
import { Routes, Route } from 'react-router-dom'
import WebFont from 'webfontloader'
import Header from './component/layout/Header/Header'
import Footer from './component/layout/Footer/Footer'
import Home from './component/Home/Home.js'
import ProductDetails from './component/Product/ProductDetails.js'
import Product from './component/Product/Products.js'
import Search from './component/Product/Search.js'

const App = () => {
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"]
      }
    })
  }, [])
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/products/:keyword' element={<Product />} />
        <Route path='/products' element={<Product />} />
        <Route path='/search' element={<Search />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
