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
            <CardBody align="center" padding="10px">
              <Heading size="25px" textAlign="center" paddingTop="1px">
                {titulo}
              </Heading>
              <Text color="blue.800" fontSize="ms">
                Autor: {autor}
              </Text>
              <Text color="blue.800" fontSize="ms">
                Categoria: {categoria}
              </Text>
              <Text color="blue.800" fontSize="xs">
                Páginas: {paginas}
              </Text>
              <Text color="red.800" fontSize={16} p={5}>
                Precio: ${precio} - Stock: {stock}
              </Text>
              <Divider borderColor={"red"} />
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
