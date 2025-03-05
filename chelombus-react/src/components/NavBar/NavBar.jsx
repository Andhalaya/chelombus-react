import React from 'react'
import './NavBar.css'
import logo from '../../assets/logo.png'

function NavBar() {
  return (
    <div className='navBar'>
      <div className="logo">
        <img src={logo} alt="" width={"50px"} />
        Chelombus
      </div>
      <div className='nav'>
        <div className="box home">HOME</div>
        <div className="databases">DATABASES</div>
        <div className="aboutUs">ABOUT US</div>
        <div className="contact">CONTACT</div>
        <div className="search-btn">SEARCH</div>
      </div>
    </div>
  )
}

export default NavBar