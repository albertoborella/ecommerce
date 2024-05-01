import React, { useContext } from "react";
import {
  Card,
  CardFooter,
  Stack,
  Heading,
  Text,
  Divider,
  Button,
  Flex,
  CardBody,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import Context from "../../context/CartContext";

const Item = ({ id, titulo, autor, precio, imagen, stock }) => {
  const context = useContext(Context)

  return (
    <Card maxW="xs" m={1} w={'85%'} margin='10px auto'>
        <CardBody>
            <Image
            src={imagen}
            alt={titulo}
            borderRadius="lg"
            boxSize='100%'
            objectFit='cover' 
            w='350px'
            h='350px' 
            
            />
            <Stack mt="2" spacing="1">
            <Heading size="sm" color="#608e8e" textAlign='center'> {titulo}</Heading>
            <Text color="#c86f43" fontSize="sm" textAlign={'center'}>
                ${precio}
            </Text>
            </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          {
            stock !== 0 ?
            <Button size={'md'} bg={'#FC8181'} fontSize={12} h={8}>
                <Link to={`/libro/${id}`}>
                    Ver detalle
                </Link>
            </Button>
            :
            <Flex alignItems='center' gap='4' margin={'auto'}>
            <Button isDisabled='true' size={'md'} bg={'#FC8181'} fontSize={12} h={8}>
                    Ver detalle
            </Button>
            <Text color={'red'}>Stock: {stock}</Text>
            </Flex>
          }
        </CardFooter>
        
    </Card>
  );
};

export default Item;
