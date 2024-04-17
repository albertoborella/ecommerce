import React from "react";
import {
  Card,
  Box,
  Stack,
  Heading,
  Text,
  CardBody,
  Image,
  Center,
  Divider,
} from "@chakra-ui/react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({
  id,
  imagen,
  titulo,
  autor,
  categoria,
  paginas,
  precio,
  stock,
}) => {
  const onAdd = (cantidad) => {
    console.log(cantidad);
  };

  return (
    <div>
      <Center>
      <Card bg="gray.100" width='400px' marginTop={15} marginBottom={15}>
        <CardBody align="center" padding='10px'>
          <Image src={imagen} alt={titulo} borderRadius="lg" width='90%' />
          <Stack mt="3">
            <Heading size="20px" textAlign="center" paddingTop='1px'>
              {titulo}
            </Heading>
            <Text color="blue.800" fontSize="xs">
              Autor: {autor}
            </Text>
            <Text color="blue.800" fontSize="xs">
              Categoria: {categoria}
            </Text>
            <Text color="blue.800" fontSize="xs">
              Páginas: {paginas}
            </Text>
            <Text color="red.800" fontSize={14}>
              Precio: ${precio} - Stock: {stock}
            </Text>
            <Divider borderColor={'red'} />
          </Stack>
          <Box paddingTop={2}>
            <ItemCount
              initial={1}
              stock={stock}
              onAdd={(cantidad) => console.log("cantidad agregada", cantidad)}
            />
          </Box>
        </CardBody>
      </Card>
      </Center>
    </div>
  );
};

export default ItemDetail;
