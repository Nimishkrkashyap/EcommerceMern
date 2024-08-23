import React from 'react'
import { Routes, Route } from 'react-router-dom'
import WebFont from 'webfontloader'
import Header from './component/layout.js/Header/Header'
import Footer from './component/layout.js/Footer/Footer'
import Home from './component/Home/Home.js'

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
      </Routes>
      <Footer />
    </>
  )
}

export default App
