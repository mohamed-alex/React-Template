import React from 'react'
import Social from '.././Social/Social'
import Work from '.././Work/Work'
import About from '.././About/About'
import Profile from '.././Profile/Profile'
import Footer from '.././Footer/Footer'
import Portfolio from '.././Portfolio/Portfolio'
import Contact from '.././Contact/Contact'
import Home from '.././Home/Home'
import Introduction from '.././Introduction/Introduction'



export default function Index() {

  const style = {
    display: 'flex',
    justifyContent:'space-evenly'
  }
  return (
    <div>
        <Home />
        <Work />
        <Portfolio />
        <div className='personal-sec' style={style}>
          <Profile />
          <About />
        </div>
        <Introduction />
        <Contact />
        <Social />
        <Footer />
    </div>
  )
}
