import React, {useState} from 'react'
import "./ItemListContainer.css"
import btc from "../assets/btc.png"
import {AiFillPlusCircle} from "react-icons/ai"
import {AiFillMinusCircle} from "react-icons/ai"
import ItemList  from './ItemList/ItemList'


export const ItemListContainer = ({greeting}) => {
    const [counter, setCounter] = useState(10)

    const add = () => setCounter(counter + 1);

    const  remove = () => setCounter(counter - 1);

    return (
        <>
          <p className="greeting">{greeting}</p> 
          <div className="cardTokens">
            <img className="imgTokens" alt="Bitcoin" src={btc}></img>
            <h3 className="titleTokens">Bitcoin</h3>
            <div className="btnsCards">
              <button className="remover" onClick={remove}><AiFillMinusCircle/></button>
              <p>{counter}</p>
              <button className="agregar" onClick={add}><AiFillPlusCircle/></button>
            </div>
          </div> 
          <h1>Desarolladores del Token</h1>
          <div className="display__devs">
            <ItemList/>
          </div>
        </>
    )
}

export default ItemListContainer