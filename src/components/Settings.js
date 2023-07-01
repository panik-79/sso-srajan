import React, { useState } from 'react'
import "./Settings.css"
import Avatar from '../images/Avatar.png'
function Settings() {
    const [currentPassword,setCurrentPassword] = useState("");
    const [newPassword,setNewPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const validateLength = ()=>newPassword.length > 8;
    const validateCapitalLetter = ()=>/[A-Z]/.test(newPassword);
    const validateNumber = ()=>/[0-9]/.test(newPassword);
    const validateSpecialCharacter = ()=>/[ `!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]/.test(newPassword);
  return (
    <div>
        <div className='pic-change'>
            <img className='avatar' src={Avatar} alt=''/>
            <button className='upload-profile-pic'>Upload Profile photo</button>
        </div>
        <div>
            <div>
                <h2>Change Your Password</h2>
                <p>Current Password</p>
                <input value = {currentPassword} style = {{color: "white"}} placeholder='Enter Current Password' onChange={(e)=>{setCurrentPassword(e.target.value)}}/>
            </div>
            <div>
                <p>New Password</p>
                <input value = {newPassword} style = {{color: "white"}}placeholder='Enter new password' onChange={(e)=>{setNewPassword(e.target.value)}}/>
                <div className='validation'>
                    <p className="validation-text" style = {{color: validateLength() ? "#73D189" : "grey"}}>· Minimum 8 characters</p>
                    <p className='validation-text' style = {{color: validateCapitalLetter() ? "#73D189" : "grey"}}>· One uppercase letter</p>
                    <p className='validation-text' style = {{color: validateNumber() ? "#73D189" : "grey"}}>· One number</p>
                    <p className='validation-text' style = {{color: validateSpecialCharacter() ? "#73D189" : "grey"}}>· One special Character !$#@%^&*_</p>
                </div>
            </div>
            <div>
                <p>Confirm password</p>
                <input value={confirmPassword} style = {{color: "white"}} placeholder='Confirm new password' onChange={(e)=>{setConfirmPassword(e.target.value)}}/>
            </div>
        </div>
    </div>
  )
}

export default Settings