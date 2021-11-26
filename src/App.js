import React, { Fragment } from 'react';
import "./App.css"

// componentes
import NavBar  from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';



function App() {
  // countre es la variable que define nuestro state
  // setCounter es la funcion que nos permite modificar el estado
  // lo que pasamos luego del operador de asignacion es el valor de counter

  return (
    <Fragment>
      <NavBar/>
      <h1>El monedero</h1>
      <ItemListContainer greeting = "Bienvenido a El Monedero, tu exchange de cryptos."/>
    </Fragment>
  );
}

export default App;


