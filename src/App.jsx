import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {

  return (
    <ChakraProvider>
      <NavBar />
      <ItemListContainer saludo='Bienvenido a "La Librería"' />
    </ChakraProvider>
  )
}

export default App
