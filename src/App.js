import React from 'react';
import "./App.css"

// componentes
import Header from './componentes/Header/Header';
import NavBar  from './componentes/NavBar/NavBar';
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from "./views/Home/Home";
import About from "./views/About/About";
import Contact from './views/Contact/Contact';
import Cart from "./views/Cart/Cart"
import Error from "./views/Error/Error"
import CardProvider from './componentes/CardContext/CardContext';


function App() {
  // countre es la variable que define nuestro state
  // setCounter es la funcion que nos permite modificar el estado
  // lo que pasamos luego del operador de asignacion es el valor de counter

  return (
    <Router>
      <Header/>
      <NavBar/>
      <CardProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
        <Route path="/detail/:id" element={<ItemDetailContainer/>} />
        <Route path="/Cart" element={<Cart/>} />
      </Routes>
      </CardProvider>
    </Router>
  );
}

export default App;


