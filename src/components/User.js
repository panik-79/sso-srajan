import React from 'react'
import Avatar from '../images/Avatar.png'
import Figrid from '../images/FiGrid.png'
import Setting from '../images/FiSettings.png'
import PowerOff from '../images/Vector.png'
const User = ({currTab,setCurrTab}) => {
  return (
    <div className='user'>
        <div className="user-info">
            <div className="user-image">
                <img src={Avatar} alt="" />
            </div>
            <span className='user-name'>Ankit Kumar Pathak</span>
            <span className="job-title">Software Developer - Level 1</span>
        </div>
        <div className="buttons">
            <button onClick={()=>{setCurrTab("All Apps")}}>
                <img src={Figrid} alt="" />
                <span >All Apps</span>
            </button>
            <button onClick={()=>{setCurrTab("Settings")}}>
                <img src={Setting} alt="" />
                <span >Settings</span>
            </button>
            <button>
                <img src={PowerOff} alt="" />
                <span>Log Out</span>
            </button>
        </div>
    </div>
  )
}

export default User