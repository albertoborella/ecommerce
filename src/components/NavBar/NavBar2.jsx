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
      bg="teal.300"
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
            color="blueviolet"
            fontWeight={300}
            rightIcon={<ChevronDownIcon />}
          >
            Temáticas de lecturas
          </MenuButton>
        </AbsoluteCenter>
        <MenuList className="opciones">
          <Link to="/categoria/Hechos Reales">
            <MenuItem color="blueviolet">Hechos Reales</MenuItem>
          </Link>
          <Link to="/categoria/Narrativa">
            <MenuItem color="blueviolet">Narrativa</MenuItem>
          </Link>
          <Link to="/categoria/Novela">
            <MenuItem color="blueviolet">Novela</MenuItem>
          </Link>
        </MenuList>
      </Menu>
      <Button bg="teal.400" colorScheme="teal.400">
        <CartWidget />
      </Button>
    </Flex>
  );
};

export default NavBar2;
