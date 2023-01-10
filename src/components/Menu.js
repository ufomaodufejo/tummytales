import React, {useState} from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Card from "./Card";
import menudata from "./menudata";
import { useAuth } from "../Contexts/LoginContext";


function Menu() {
  const auth = useAuth()

  function handleSubmits(e) {
    e.preventDefault();
  }
  return (
    <div className="menuheader">
      <div className="search">
        <div className="searchform">
          <form onSubmit={handleSubmits}>
            <input type="search" placeholder="Search products" />
            <button className="btn">Search</button>
          </form>
        </div>
        <div className="shoppingcart">
          <Link to="/cart">
            <FaShoppingCart size={30} />
          </Link>
          <p>{auth.cartItems.length > 0 && auth.cartItems.length}</p>
        </div>
      </div>

      <div className="menu">
        {menudata.map((menu) => {
          return <Card key={menu.id} menu={menu} onAdd={()=>auth.addtocart(menu)} />;
        })}
      </div>
    </div>
  );
}

export default Menu;
