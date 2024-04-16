import React from "react";
import Item from "../Item/Item";
import { Grid, GridItem, Container } from "@chakra-ui/react";

const ItemList = ({ libros }) => {
  return (
    <Container maxW='6xl' bg='#e1e2e3' centerContent>
    <Grid templateColumns='repeat(4, 1fr)' wrap='wrap' gap={2} p={6}>
        {libros.map((libro) => (
          <GridItem w='100%'>
            <Item key={libro.id} {...libro} />
          </GridItem>
        ))}
    </Grid>
    </Container>
  );
};

export default ItemList;
