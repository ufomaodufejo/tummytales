import React, { useContext } from "react";
import { LoginContext } from "../Contexts/LoginContext";
import avatar from "./assets/avatar.png";
import ModalWindow from "./ModalWindow";

function Profile() {
  const { fullname } = useContext(LoginContext);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="card">
       <ModalWindow open={open} handleClose={handleClose} />
      <img
        className="card-image"
        src={avatar}
        alt="Avatar"
        style={{ width: 100 }}
      />
      <div className="card-name">Welcome, {fullname}</div>
      <div className="card-text">
        <p><b>Kindly click the button below to place your order.</b></p>
        <p><b>Thank you.</b></p>
      </div>
      <div>
      <button className="dropbtn" onClick={handleOpen} >Make Order</button>
      </div>
    </div>
  );
}

export default Profile;
