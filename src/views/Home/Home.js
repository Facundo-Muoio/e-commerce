import React from 'react'
import { Carrusel } from "../../componentes/Carrusel/Carrusel"
// itemListContainer
import ItemListContainer from '../../componentes/ItemListContainer/ItemListContainer'
import "./Home.css"



const Home = () => {


    return (
        <div>
            <Carrusel />
            <ItemListContainer />
        </div>
    )
}

export default Home