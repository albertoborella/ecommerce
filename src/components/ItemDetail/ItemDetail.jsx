import React, { useContext, useState } from "react";
import {
  Card,
  CardFooter,
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
import Context from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

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
  const [cantidad, setCantidad] = useState(0);
  const { addItem } = useContext(Context);

  const onAdd = (cantidad) => {
    const item = { id, titulo, precio, stock };
    setCantidad(cantidad);
    addItem(item, cantidad);
  };

  return (
    <>
      <Center>
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
          mt={70}
        >
          <Image
            src={imagen}
            alt={titulo}
            objectFit="cover"
            maxW={{ base: "100%", sm: "250px" }}
          />
          <Stack mt="2">
            <CardBody align="center"pt='2px'>
              <Heading fontSize="25px" textAlign="center" color="green.700" mb='10px'>
                {titulo}
              </Heading>
              <Text color="green.600" fontSize="ms">
                Autor: {autor}
              </Text>
              <Text color="green.600" fontSize="ms">
                Categoria: {categoria}
              </Text>
              <Text color="green.600" fontSize="xs">
                Páginas: {paginas}
              </Text>
              <Text color="green.600" fontSize={16} p={5} fontWeight={'bold'}>
                Precio: ${precio} - Stock: {stock}
              </Text>
              <Divider borderColor={"green.700"} />
            </CardBody>
            <CardFooter>
              <Box margin='auto' >
              {cantidad > 0 ? (
                <Link to="/cart"><CartWidget /></Link>
              ) : (
                <Box paddingTop={2}>
                  <ItemCount initial={1} stock={stock} onAdd={onAdd} />
                </Box>
              )}
              </Box>
            </CardFooter>
          </Stack>
        </Card>
      </Center>
    </>
  );
};

export default ItemDetail;
