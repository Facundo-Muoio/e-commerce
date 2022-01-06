import React from 'react';
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';


// componentes
import Header from './componentes/Header/Header';
import NavBar  from './componentes/NavBar/NavBar';
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import CartProvider from './componentes/CartContext/CartContext';
import { Footer } from './componentes/Footer/Footer';

// Router
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"

// Views
import Home from "./views/Home/Home";
import Contact from './views/Contact/Contact';
import Cart from "./views/Cart/Cart"
import Error from "./views/Error/Error"
import { BookByCategory } from "./views/Category/BookByCategory/BookByCategory"




function App() {
  // countre es la variable que define nuestro state
  // setCounter es la funcion que nos permite modificar el estado
  // lo que pasamos luego del operador de asignacion es el valor de counter

  return (
    <div className="bodyContainer">
      <CartProvider>
        <Router>
            <Header/>
            <NavBar/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Error />} />
              <Route path="/detail/:id" element={<ItemDetailContainer/>} />
              <Route path="/categorys/:category" element={<BookByCategory/>} />
              <Route path="/Cart" element={<Cart/>} />
            </Routes>
            <Footer/>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;


