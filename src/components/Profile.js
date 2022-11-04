import React, { useContext } from "react";
import { LoginContext } from "../Contexts/LoginContext";
import avatar from "./assets/avatar.png";

function Profile() {
  const { fullname } = useContext(LoginContext);
  return (
    <div className="card">
      <img
        className="card-image"
        src={avatar}
        alt="Avatar"
        style={{ width: 100 }}
      />
      <div className="card-name">Welcome, {fullname}</div>
      <div className="card-text">
        <p><b>Kindly click the button below to proceed to place your order.</b></p>
        <p><b>Thank you.</b></p>
      </div>
      <div>
      <button className="dropbtn">Make Order</button>
      </div>
    </div>
  );
}

export default Profile;
