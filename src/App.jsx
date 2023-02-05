import React from 'react'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import About from './components/about/About'
import Experience from './components/Experience/Experience'
import Service from './components/service/Service'
import Porto from './components/Portofolio/Porto'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
      <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Service />
      <Porto />
      <Contact />
      <Footer />
      </>
  )
}

export default App