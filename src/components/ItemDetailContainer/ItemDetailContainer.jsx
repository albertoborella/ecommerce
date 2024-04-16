import React, { useEffect, useState } from 'react'
import { getLibroId } from '../../data/asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import {useParams} from 'react-router-dom'

const ItemDetailContainer = () => {
    const [libro, setLibro] = useState({})

    const {itemId} = useParams()

    useEffect(() => {
        getLibroId(itemId)
            .then(response => { 
                setLibro(response)
            })
            .catch(error => {
                console.log(error)
            })
        },[])

  return (
    <div>
        <ItemDetail {...libro} />
    </div>
  )
}

export default ItemDetailContainer