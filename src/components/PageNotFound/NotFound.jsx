import React from "react";
import "../../assets/404-title-pic.jpg";
import { Box, Heading, Text, Image } from "@chakra-ui/react";

const NotFound = () => {
  return (
    <>
      <Box width="100%" textAlign="center" padding="170px">
        <Heading>Página No Encontrada</Heading>
        <Text fontSize={25} fontWeight={600}>
          -Error 404-
        </Text>
      </Box>
    </>
  );
};

export default NotFound;
