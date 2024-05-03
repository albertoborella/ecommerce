import { Box, Heading } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../config/firebase";
import { collection, getDocs, where, query } from "firebase/firestore";

const ItemListContainer = ({ saludo }) => {
  
  const [libros, setLibros] = useState([]);
  const { categoriaId } = useParams();
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const getData = async () => {
      const coleccion = collection(db, 'libros')

      const queryRef = !categoriaId ?
      coleccion
      :
      query(coleccion, where('categoria', '==', categoriaId))

      const response = await getDocs(queryRef)

      const libros = response.docs.map((doc) => {
        const newItem = {
          ...doc.data(),
          id: doc.id
        }
        return newItem
      })
      setLibros(libros)
      setLoading(false)
    }
    getData()
  }, [categoriaId]);

  return (
    <Box>
      <Heading textAlign={"center"} fontSize={24} color={"#276749"} mt={4} mb={4}>
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
