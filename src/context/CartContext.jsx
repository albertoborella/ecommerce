import React, { createContext, useState } from 'react'

const Context = createContext()

export const ContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const addItem = (bookToAdd, cantidad) => {
        const newBook = {
            cantidad,
            ...bookToAdd
        }
        if(isInCart(newBook.id)) {
            const updateCart = cart.map((elem) => {
                if(elem.id === newBook.id) {
                    return {...elem, cantidad: elem.cantidad + newBook.cantidad}
                }
                return elem
            })
            setCart(updateCart)
        }else{
            setCart([...cart, newBook])
        }
    }

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id) 
    }

    const removeItem = (id) => {
        const deleteItem = cart.filter((prod) => prod.id !== id)
        setCart([...deleteItem])
    }

    const getTotal = () => {
        const total = cart.reduce((actual, item) => actual + item.cantidad * item.precio, 0)
        return total
    }
    
    const clearCart = () => {
        setCart([])
    }

    const getCantidad = () => {
        let total = 0
        cart.forEach((prod) => {
            total = total + prod.cantidad
        })
        return total
    }

  return (
    <Context.Provider
        value={{
            cart,
            addItem,
            removeItem,
            getTotal,
            clearCart,
            getCantidad
        }}
    >
        {children}
    </Context.Provider>
  )
}

export default Context