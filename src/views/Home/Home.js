import React from 'react'
// itemListContainer
import ItemListContainer from '../../componentes/ItemListContainer/ItemListContainer'
import "./Home.css"


const Home = () => {


    return (
        <div>
            <ItemListContainer greeting = "Bienvenido a El Monedero, tu exchange de cryptos." />
        </div>
    )
}

export default Home