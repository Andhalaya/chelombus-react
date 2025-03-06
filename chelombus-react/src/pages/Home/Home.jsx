import React from 'react'
import Header from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'
import Main from '../../components/Main/Main'
import Footer from '../../components/Footer/Footer'

function Home() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <Header />
        <Main />
        <Footer />
      </div>

    </div>
  )
}

export default Home