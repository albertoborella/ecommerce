import React from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import CartWidget from "../CartWidget/CartWidget";
import "./navbar.css";
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
    <Flex
      bg="#48BB78"
      w="100%"
      p={4}
      position="relative"
      justifyContent="space-between"
    >
      <Menu>
        <p className="logo">
          <Link to="/">ECOMMERCE</Link>
        </p>
        <AbsoluteCenter>
          <MenuButton
            as={Button}
            color="#48BB78"
            fontWeight={300}
            rightIcon={<ChevronDownIcon />}
          >
            Temáticas de lecturas
          </MenuButton>
        </AbsoluteCenter>
        <MenuList className="opciones">
          <Link to="/categoria/Hechos Reales">
            <MenuItem>Hechos Reales</MenuItem>
          </Link>
          <Link to="/categoria/Narrativa">
            <MenuItem>Narrativa</MenuItem>
          </Link>
          <Link to="/categoria/Novela">
            <MenuItem>Novela</MenuItem>
          </Link>
          <Link to="/">
            <MenuItem>Todos los Libros</MenuItem>
          </Link>
        </MenuList>
      </Menu>
      <Link to='/cart'>
      <Button bg="E53E3E" colorScheme="E53E3E">
        <CartWidget />
      </Button>
      </Link>
    </Flex>
  );
};

export default NavBar2;
