import React from 'react';
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';


// componentes
import Header from './componentes/Header/Header';
import NavBar  from './componentes/NavBar/NavBar';
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import CartProvider from './componentes/CartContext/CartContext';

// Router
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"

// Views
import Home from "./views/Home/Home";
import About from "./views/About/About";
import Contact from './views/Contact/Contact';
import Cart from "./views/Cart/Cart"
import Error from "./views/Error/Error"
import { Fantasía } from "./views/Category/Fantasía/Fantasía"



function App() {
  // countre es la variable que define nuestro state
  // setCounter es la funcion que nos permite modificar el estado
  // lo que pasamos luego del operador de asignacion es el valor de counter

  return (
    <CartProvider>
      <Router>
        <Header/>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
          <Route path="/detail/:id" element={<ItemDetailContainer/>} />
          <Route path="/category/fantasia" element={<Fantasía />} />
          <Route path="/Cart" element={<Cart/>} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;


