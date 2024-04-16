import React from 'react'
import { HiOutlineShoppingCart } from "react-icons/hi";
import {Box } from "@chakra-ui/react";

const CartWidget = () => {
  return (
    <>
      <HiOutlineShoppingCart style={{  fontSize: 28, color: 'white', marginRight:'10px'}} />
      0
    </>
    
  )
}

export default CartWidget