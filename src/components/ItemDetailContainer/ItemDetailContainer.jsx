import React, { useEffect, useState } from "react";
import { getLibroId } from "../../data/asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams, useNavigate } from "react-router-dom";
import { BiFontSize } from "react-icons/bi";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

const ItemDetailContainer = () => {
  const [libro, setLibro] = useState({});
  const [loading, setLoading] = useState(true)
  const { itemId } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    const getLibro = async () => {

      const queryRef = doc(db, 'libros', itemId)
      const response =  await getDoc(queryRef)
      const newItem = {
        ...response.data(),
        id: response.id
      }
      setLibro(newItem)
      setLoading(false)
    }
    getLibro()
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
