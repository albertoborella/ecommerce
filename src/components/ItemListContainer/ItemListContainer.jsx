import { Container } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import React from 'react'

const ItemListContainer = ({saludo}) => {
  return (
    <Container maxW='2xl' centerContent marginTop={10}>
    <Text fontSize='4xl'>{saludo}</Text>
    </Container>
  )
}

export default ItemListContainer