import React from "react";
import { useState } from "react";
import {
  FormControl,
  Input,
  Button,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { collection, addDoc, getDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebase"
import { useContext } from "react";
import Context from '../../context/CartContext'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'


const Checkout = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        repeatedEmail: '',
        phone: ''
      })
    const [emailMatch, setEmailMatch] = useState(true)
    const [error, setError] = useState({})
    const { cart, getTotal, clearCart } = useContext(Context)
    const updateUser= (event)=> {
      setUser((user) => ({
        ...user,
        [event.target.name]: event.target.value
      }))
    }
    const navigate = useNavigate()

    const validateEmails = () => {
      if(user.email === user.repeatedEmail) {
        setEmailMatch(true)
      }else{
        setEmailMatch(false)
      }
    }
    const validateForm = () => {
      const errors = {}
      if(!user.name){
        errors.name = 'Debes agregar el nombre'
      }
      setError(errors)
      return Object.keys(errors).length === 0
    }
    
    const getOrder = async () => {
      const isFormValid = validateForm()
      validateEmails()
      if(isFormValid && emailMatch){
        const ordersCollection = collection(db, 'orders')

        try{
          for(const item of cart) {
            const libroRef = doc(db, 'libros', item.id)
            const libroDoc = await getDoc(libroRef)

            const currentStock = libroDoc.data().stock

            if(currentStock >= item.cantidad){
              await updateDoc(libroRef, {
                stock: currentStock - item.cantidad
              })
            }else{
              console.log(`No hay suficiente stock del libro ${item.titulo}`)
            }

            const order = {
              buyer: user,
              cart: cart,
              total: getTotal()
            }

            const orderDocRef = await addDoc(ordersCollection, order)
            Swal.fire({
              title: 'Gracias por tu compra',
              text: `El número de orden es ${orderDocRef.id}`,
              icon: 'success',
              confirmButtonText: 'Cool'
            }).then(() => {
              clearCart()
              navigate('/')
            }) 
          }
        }catch(error){
          console.log(error)
        }
      }
    }

  return (
    <Flex direction={'column'} justify={'center'} align={'center'} mt={10}>
      <Heading mb={2} fontSize={22} >Datos de facturación</Heading>
      <FormControl w={'40%'}>
        <Input type="text" name="name" placeholder='Ingrese un nombre' onChange={updateUser} mb={2} />
        <Input type="email" name="email" placeholder='Ingrese un email' onChange={updateUser} mb={2} />
        <Input type="email" name="repeatedEmail" placeholder='Repita el email' onChange={updateUser} mb={2} />
        <Input type="text" name="phone" placeholder='Ingrese un telefono' onChange={updateUser} mb={2} />
        <Flex justify={'center'} align={'center'} w={'100%'}>
        <Button onClick={getOrder}>Finalizar compra</Button>
        </Flex>
      </FormControl>
    </Flex>
  );
};

export default Checkout;
