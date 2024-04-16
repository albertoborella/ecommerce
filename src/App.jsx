import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar2 from "./components/NavBar/NavBar2";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";


function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <NavBar2 />
        <Routes>
          <Route path="/" element={<ItemListContainer saludo='Bienvenidos a la Libreria Virtual'/>} />
          <Route path="/categoria/:categoriaId" element={<ItemListContainer saludo='Bienvenidos a la Libreria Virtual'/>} />
          <Route path="/libro/:itemId" element={<ItemDetailContainer />} />
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
