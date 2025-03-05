import React from 'react';
import './Header.css';
import headerImg from '../../assets/headerImg.png';

function Header() {
  return (
    <div className='header'>
      <div className="text-container">
        <div className='header-text'>
          <div className='title'>
            <h2>Chelombus</h2>
          <h3>Databases</h3>
          </div>
          <p>Jkba kajsdha ksdkasdjkjasdh sadkjasdkadjhkajsdkjasdjasdh ksdkasdjkjasdhkajsdh
            oaisdjaisjdo
          </p>
          <div className='discover-btn'>Discover more</div>
        </div>
      </div>
      
      <div className='header-img'>
        <img src={headerImg} alt="" />
      </div>
      
    </div>
  )
}

export default Header