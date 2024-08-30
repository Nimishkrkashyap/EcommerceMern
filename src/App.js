import React from 'react'
import "./App.css"
import { Routes, Route } from 'react-router-dom'
import WebFont from 'webfontloader'
import Header from './component/layout.js/Header/Header'
import Footer from './component/layout.js/Footer/Footer'
import Home from './component/Home/Home.js'
import ProductDetails from './component/Product/ProductDetails.js'

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
      </Routes>
      <Footer />
    </>
  )
}

export default App
