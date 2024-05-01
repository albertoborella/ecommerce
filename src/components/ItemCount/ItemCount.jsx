import { Button, Text, Flex, Center,Box } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [cantidad, setCantidad] = useState(initial);

  const incrementar = () => {
    if(cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };
  const decrementar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };
  return (
    <>
    <Center>
      <Flex mb={5}>
        <Button bg={'#FEB2B2'} marginRight={5} onClick={decrementar}>-</Button>
        <Text fontSize={15} paddingTop={2} textAlign='center'>{cantidad}</Text>
        <Button bg={'#FEB2B2'} marginLeft={5} onClick={incrementar}>+</Button>
      </Flex>
      </Center>
      <Center>
      <Button bg={'#FEB2B2'} onClick={() => onAdd(cantidad)} disabled={!stock}>Agregar al carrito</Button>
      </Center>
    </>
  );
};

export default ItemCount;
