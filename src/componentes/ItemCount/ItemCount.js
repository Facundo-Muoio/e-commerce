import React, { useState } from 'react'
import "./ItemCount.css"
import {Link} from "react-router-dom"

const ItemCount = ({stock, initial, onAdd}) => {
    const [cantidad, setCantidad] = useState(initial)

    const sumarCantidad = () => {
        if(cantidad < stock){
            setCantidad(cantidad + 1);
        }
    }
    
   const restarCantidad = () => {
       if (cantidad > 0){
           setCantidad(cantidad - 1);
       }
   }

   const saveToCart = () => {
       localStorage.setItem("Producto Lista",JSON.stringify([cantidad]))
   } 

    return (
        <>
         <div className="containerSumRestCantidad">
             <button onClick={restarCantidad}>-</button> 
             <p>Cantidad: {cantidad}</p>
             <button onClick={sumarCantidad}>+</button>
         </div>
         {
             cantidad > 0 ? <button className="addToCart" onClick={() => onAdd(cantidad)}>Sumar al carrito</button> : <button className="addToCart" disable="disable">Sumar al carrito</button>
         }
         {
             cantidad > 0 ?<button className="buyNow" onClick={saveToCart}><Link to="/Cart">Comprar ahora</Link></button> : <button className="buyNow" disable="disable">Comprar ahora</button>
         }
        </>
    )
}

export default ItemCount