import React from 'react'
import { HiOutlineShoppingCart } from "react-icons/hi";
import './cartWidget.css'

const CartWidget = () => {
  return (
    <>
      <HiOutlineShoppingCart style={{ fontSize: 28, color: 'blueviolet', marginRight:'10px'}} />
      <span className='cant-carrito' >0</span>
    </>
    
  )
}

export default CartWidget