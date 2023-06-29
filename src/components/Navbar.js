import React from 'react'
import Figrid from '../images/FiGrid.png'
import Search from '../images/FiSearch.png'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbar-head">
            <img src={Figrid} alt="" />
            <span>All apps</span>
        </div>
        <div className="search-bar">
            <img src={Search} alt="search icon" />
            <input type="text" placeholder='Search' />
        </div>
    </div>
  )
}

export default Navbar;