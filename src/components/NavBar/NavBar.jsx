import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import {
  Flex,
  Box,
  Heading,
  Spacer,
  ButtonGroup,
  Button,
} from '@chakra-ui/react'

const NavBar = () => {
  return (
    <Flex minWidth='max-content' gap='2' bg='teal.500' p='5'>
      <Box p='2'>
        <Heading fontSize='xl' fontWeight='200' color='yellow' as='i'>Ecommerce</Heading>
      </Box>
      <Spacer spacing={4} direction='column' align='center'>
      <ButtonGroup gap='2' display='flex' alignItems='center' justifyContent='center'>
        <Button colorScheme='teal' as='i' fontWeight={200}>Libros</Button>
      </ButtonGroup>
      </Spacer>
      <Button marginRight='80px' colorScheme='teal'>
        <CartWidget />
      </Button>
    </Flex>
  )
}

export default NavBar