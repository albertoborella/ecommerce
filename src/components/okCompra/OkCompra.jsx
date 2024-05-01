import React from 'react'
import { FcOk } from "react-icons/fc";
import { Box, Card, CardBody } from '@chakra-ui/react'

const OkCompra = () => {
  return (
    <Card w={'300px'} h={'250px'} margin={'auto'} mt={'50px'} >
      <CardBody fontSize={'160px'} margin={'auto'}>
        <FcOk />
        <Box fontSize={'20px'} margin={'auto'} mt={'20px'} >Compra Finalizada</Box>
      </CardBody>
    </Card>
  )
}

export default OkCompra