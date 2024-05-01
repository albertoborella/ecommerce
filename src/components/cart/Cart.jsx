import React from 'react'
import { useContext } from 'react'
import Context from '../../context/CartContext'
import {
    Button,
    Box,
    Flex,
    Heading,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
  } from '@chakra-ui/react'
  import { RiDeleteBin3Fill } from "react-icons/ri";
  import { Link } from 'react-router-dom';

const Cart = () => {
    const {cart, getTotal, removeItem, clearCart} = useContext(Context)
    console.log('cart', cart)
    if(cart.length === 0) {
        return (
            <Flex direction={'column'} justify={'center'} textAlign={'center'} mt={30}>
                <Heading mb={'30px'} >Aún no agregaste productos al carrito</Heading>
                <Link to='/'><Button>Ver Libros</Button></Link>
            </Flex>
        )
    }

  return (
    <Box w={"80%"} margin={"40px auto"}>
      <TableContainer>
        <Table variant="striped" colorScheme="teal" size={"sm"} mb={"20px"}>
          <Thead>
            <Tr>
              <Th color={'blue'} fontSize='15px'>Título</Th>
              <Th color={'blue'} fontSize='15px'>Cantidad</Th>
              <Th color={'blue'} fontSize='15px'>Precio</Th>
              <Th color={'blue'} fontSize='15px'>Subtotal</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {cart.map((prod) => (
              <Tr key={prod.id}>
                <Td>{prod.titulo}</Td>
                <Td>{prod.cantidad}</Td>
                <Td>{prod.precio}</Td>
                <Td>{prod.precio * prod.cantidad}</Td>
                <Td>
                  <Button onClick={() => removeItem(prod.id)}>
                    <RiDeleteBin3Fill />
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Box>
        <Box
          fontSize={"20px"}
          color={"red.400"}
          textAlign={"center"}
          margin={"auto"}
        >
          Total: ${getTotal()}
        </Box>
        <Flex textAlign={"center"} margin={"auto"} gap={6}>
          <Button mt={"20px"} onClick={() => clearCart()}>
            Vaciar carrito
          </Button>
          <Link to='ok/'><Button mt={"20px"}>Finalizar compra</Button></Link>
        </Flex>
      </Box>
    </Box>
  );
}

export default Cart