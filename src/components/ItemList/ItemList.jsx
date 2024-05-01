import React from "react";
import Item from "../Item/Item";
import { Box, Flex } from "@chakra-ui/react";

const ItemList = ({ libros }) => {
  return (
    <Flex wrap={'wrap'} justify={'center'} align={'center'} rowGap={1}>
       {libros.map((libro) => (
        <Box key={libro.id}>
            <Item {...libro} />
        </Box>
       ))}
    </Flex>
  );
};

export default ItemList;
