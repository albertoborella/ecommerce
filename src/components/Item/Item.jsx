import React from "react";
import {
  Card,
  Stack,
  Heading,
  Text,
  Divider,
  Button,
  CardBody,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Item = ({ id, titulo, autor, precio, imagen, stock }) => {
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
            <Text color="red.800" fontSize="xs">
              ${precio} - Stock:{stock}
            </Text>
            <Divider />
            <Button fontWeight={100} colorScheme="blue" size="sm">
              <Link to={`/item/${id}`}>Ver Detalle</Link>
            </Button>
          </Stack>
        </CardBody>
      </Card>
    </div>
  );
};

export default Item;
