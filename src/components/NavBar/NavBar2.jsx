import React from "react";
import { ChevronDownIcon } from '@chakra-ui/icons'
import CartWidget from '../CartWidget/CartWidget'
import './navbar.css'
 import { Link } from "react-router-dom";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  AbsoluteCenter,
  Flex,
  
} from "@chakra-ui/react";

const NavBar2 = () => {
  return (
    <Flex  bg='teal.300' w='100%' p={4} position='relative' justifyContent="space-between">
    <Menu>
        <p className="logo"><Link to="/">ECOMMERCE</Link></p>
      <AbsoluteCenter >
        <MenuButton as={Button} bg='teal.400' rightIcon={<ChevronDownIcon />}>
            Temáticas de lecturas
        </MenuButton>
      </AbsoluteCenter>
      <MenuList className="opciones">
        <MenuItem><Link to='/categoria/hechos_reales'>Hechos Reales</Link></MenuItem>
        <MenuItem><Link to='/categoria/narrativa'>Narrativa</Link></MenuItem>
        <MenuItem><Link to='/categoria/novela'>Novela</Link></MenuItem>
      </MenuList>
    </Menu>
    <Button bg='teal.400' colorScheme="teal.400">
        <CartWidget />
      </Button>
    </Flex>
  );
};

export default NavBar2;
