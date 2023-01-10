import React from 'react'
import EmptyCart from './EmptyCart'
import ShoppedCart from './ShoppedCart'
import { useAuth } from "../Contexts/LoginContext";

function Cartpage({}) {
  const auth = useAuth()
  return (
    <div>
        {
          auth.cartItems.length === 0 ? <EmptyCart/> : <ShoppedCart/>
        }
    </div>
  )
}

export default Cartpage