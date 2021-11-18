import React, { Fragment } from 'react';
import NavBar  from './componentes/NavBar/NavBar';
import "./App.css"
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';



function App() {
  return (
    <Fragment>
      <NavBar/>
      <h1>El monedero</h1>
      <ItemListContainer greeting = "Bienvenido a El Monedero, tu exchange de cryptos."/>
    </Fragment>
  );
}

export default App;
