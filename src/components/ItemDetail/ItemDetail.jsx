import React from "react";
import { Card,Box, Stack, Heading, Text,CardBody, Image } from "@chakra-ui/react";
import ItemCount from "../ItemCount/ItemCount";


const ItemDetail = ({id,imagen,titulo,autor,categoria,precio,stock}) => {

  return (
    <div>
      <Card bg="gray.100">
        <CardBody align="center">
          <Image src={imagen} alt={titulo} borderRadius="lg" h="300px" />
          <Stack mt="3">
            <Heading size="20px" textAlign="center">
              {titulo}
            </Heading>
            <Text color="blue.800" fontSize="xs">
              Autor: {autor}
            </Text>
            <Text color="blue.800" fontSize="xs">
              Categoria: {categoria}
            </Text>
            <Text color="red.800" fontSize="xs">
              ${precio}
            </Text>
          </Stack>
          <Box>
          <ItemCount initial={1} stock={stock} onAdd={(cantidad) => console.log('cantidad agregada', cantidad)} />
          </Box>
          
        </CardBody>
      </Card>
    </div>
  );
};

export default ItemDetail;
