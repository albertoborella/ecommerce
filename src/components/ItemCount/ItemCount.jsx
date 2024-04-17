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
    <Center>
      <Flex>
        <Button marginRight={5} onClick={incrementar}>+</Button>
        <Text fontSize={15} paddingTop={2} textAlign='center'>{cantidad}</Text>
        <Button marginLeft={5} onClick={decrementar}>-</Button>
      </Flex>
      <Box>
      <Button on onClick={() => onAdd(cantidad)} disabled={!stock}>Agregar al carrito</Button>
      </Box>
    </Center>
  );
};

export default ItemCount;
