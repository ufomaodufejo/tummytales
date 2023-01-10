import React, { useContext } from "react";
import { LoginContext, useAuth } from "../Contexts/LoginContext";
import avatar from "./assets/avatar.png";
import { useNavigate } from "react-router-dom";
import ModalWindow from "./ModalWindow";

function Profile() {
 const auth = useAuth()
 const navigate = useNavigate()
 const handleLogout = () => {
  auth.logout()
  navigate('/')
 }
//  console.log("auth",auth)

  return (
    <div>
    <div className="card">
       {/* <ModalWindow open={open} handleClose={handleClose} />  */}
      <img
        className="card-image"
        src={avatar}
        alt="Avatar"
        style={{ width: 100 }}
      />
      <div className="card-name"> Welcome {auth.user} </div>
      <div className="card-text">
        <p><b>Kindly click the button below to place your order.</b></p>
        <p><b>Thank you.</b></p>
      </div>
      <div>
      <button className="dropbtn" onClick={handleLogout} >Log Out</button>
      </div>
    </div>
    </div>
  );
}

export default Profile;
