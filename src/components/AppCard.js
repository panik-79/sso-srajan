import React from 'react'
import Arrow from '../images/FiArrowUpRight.png'
import Logo from '../images/Beats.png'
const AppCard = () => {
  return (
    <div className='app-card'>
        <div className="logo-container">
            <img src={Logo} alt="" />
        </div>
        <div className="app-info">
            <span>Beats US</span>
            <span className='last-login'>Last Logged in: 13 June 2023</span>
        </div>
        <div>
            <img src={Arrow} alt="Open Link" />
        </div>
    </div>
  )
}

export default AppCard;