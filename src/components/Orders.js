import React from "react";
import { Link } from "react-router-dom";
import ModalWindow from "./ModalWindow";

function Orders(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="categories">
      <div className="gallery-category">
        <ModalWindow open={open} handleClose={handleClose} />
        <div className="gallery">
          <img src={props.img1} alt="smallchops" />
          <Link>
            <button className="btn1" onClick={handleOpen}>
              Order Now
            </button>
          </Link>
        </div>

        <div className="gallery">
          <img src={props.img2} alt="smallchops" />
          <Link>
            <button className="btn1" onClick={handleOpen}>
              Order Now
            </button>
          </Link>
        </div>

        <div className="gallery">
          <img src={props.img3} alt="smallchops" />
          <Link>
            <button className="btn1" onClick={handleOpen}>Order Now</button>
          </Link>
        </div>

        <div className="gallery">
          <img src={props.img4} alt="smallchops" />
          <Link>
            <button className="btn1" onClick={handleOpen}>Order Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Orders;
