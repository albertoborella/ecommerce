import { Box, Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { getLibroCategoria, getLibros } from '../../data/asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({saludo}) => {
  const [libros, setLibros] = useState([])
  const { categoriaId } = useParams()

  useEffect(() => {

    const dataLibros = categoriaId ? getLibroCategoria(categoriaId) : getLibros()

    dataLibros
      .then((resp) => setLibros(resp))
      .catch((error) => {console.log(error)
      })
  }, [categoriaId])
  
  return (
    <Box>
    <Heading textAlign={'center'} fontSize={22} color={'teal.600'} mt={4}>{saludo}</Heading>
    <ItemList libros={libros} />
    </Box>
  )
}

export default ItemListContainer