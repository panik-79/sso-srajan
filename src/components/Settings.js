import React from 'react'
import "./Settings.css"
function Settings() {
  return (
    <div>
        <div className='flex'>
            <div>

            </div>
            <button>Upload Profile photo</button>
        </div>
        <div>
            <div>
                <h2>Change Your Password</h2>
                <p>Current Password</p>
                <input placeholder='Enter Current Password'/>
            </div>
            <div>
                <p>New Password</p>
                <input placeholder='Enter new password'/>
                <div className='validation'>
                    <p className="validation-text">· Minimum 8 characters</p>
                    <p className='validation-text'>· One uppercase letter</p>
                    <p className='validation-text'>· One number</p>
                    <p className='validation-text'>· One special Character !$#@%^&*_</p>
                </div>
            </div>
            <div>
                <p>Confirm password</p>
                <input placeholder='Confirm new password' />
            </div>
        </div>
    </div>
  )
}

export default Settings