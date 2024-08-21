import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import WebFont from 'webfontloader'
import Header from './component/layout.js/Header/Header'
import Footer from './component/layout.js/Footer/Footer'

const App = () => {
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"]
      }
    })
  }, [])
  return (
    <Router>
      <Header />
      <Footer />
    </Router>
  )
}

export default App
