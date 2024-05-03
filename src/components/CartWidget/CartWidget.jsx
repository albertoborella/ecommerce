import React, { useContext } from 'react'
import { Badge, Flex } from '@chakra-ui/react'
import { HiOutlineShoppingCart } from "react-icons/hi";
import './cartWidget.css'
import Context from '../../context/CartContext';

const CartWidget = () => {
  const { getCantidad } = useContext(Context)

  return (
    <Flex mr={4}>
      <HiOutlineShoppingCart style={{ fontSize: 28, color: '#4A5568', marginRight:'10px'}} />
      <Flex justify={'center'} align={'center'} h={'50%'} w={'50%'}>
        <Badge borderRadius={'50%'} color={'black'} fontSize={'md'}>{getCantidad()}</Badge>
      </Flex>
    </Flex>
    
  )
}

export default CartWidget