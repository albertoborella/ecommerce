import { Box, Heading } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { getLibroCategoria, getLibros } from "../../data/asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ saludo }) => {
  const [libros, setLibros] = useState([]);
  const { categoriaId } = useParams();
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const dataLibros = categoriaId
      ? getLibroCategoria(categoriaId)
      : getLibros();

    dataLibros
      .then((resp) => setLibros(resp))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [categoriaId]);

  return (
    <Box>
      <Heading textAlign={"center"} fontSize={24} color={"#C53030"} mt={4} mb={4}>
        {saludo}
      </Heading>
      {
        loading ?
        <p style={{textAlign:'center', marginTop:'40px', fontSize:'50px'}}>Buscando......</p>
        :
        <ItemList libros={libros} />
      }
    </Box>
  );
};

export default ItemListContainer;
