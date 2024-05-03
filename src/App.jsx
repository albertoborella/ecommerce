import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar2 from "./components/NavBar/NavBar2";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NotFound from "./components/PageNotFound/NotFound";
import { ContextProvider } from "./context/CartContext";
import Cart from "./components/cart/Cart";
import Checkout from "./components/checkout/Checkout";

function App() {
  return (
    <ChakraProvider>
      <ContextProvider>
        <BrowserRouter>
          <NavBar2 />
          <Routes>
            <Route path="/" element={<ItemListContainer saludo="Libreria Online" />} />
            <Route path="/categoria/:categoriaId" element={<ItemListContainer saludo="Bienvenidos a la Libreria Virtual" />
              }
            />
            <Route path="/libro/:itemId" element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </ChakraProvider>
  );
}

export default App;
