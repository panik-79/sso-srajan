import React from 'react'
import Navbar from './Navbar'
import Catalogue from './Catalogue'
import Settings from './Settings'
const Apps = ({currTab}) => {
  return (
    <div className='apps'>
        <Navbar currTab={currTab}/>
        {currTab === "All Apps" ? <Catalogue/> : <Settings />}
        
    </div>
  )
}

export default Apps