import React, { useEffect, useState } from "react";
import { getLibroId } from "../../data/asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams, useNavigate } from "react-router-dom";
import { BiFontSize } from "react-icons/bi";

const ItemDetailContainer = () => {
  const [libro, setLibro] = useState({});
  const [loading, setLoading] = useState(true)
  const { itemId } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    getLibroId(itemId)
      .then((libro) => {
        if(!libro) {
          navigate('/*')
        }
        else{
          setLibro(libro)
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [])

  return (
    <>
    {
      loading ?
        <p style={{textAlign:'center', marginTop:'40px', fontSize:'30px'}}>Buscando......</p>
      :
        <ItemDetail {...libro} />
    }
    </>
  )
}

export default ItemDetailContainer;
