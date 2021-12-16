import React, { useContext } from 'react'
import { CartContext } from"../../componentes/CartContext/CartContext"
import "./Cart.css"
import {Link} from "react-router-dom"

export const Cart = () => {

    const {items, removeItem, clearItems} = useContext(CartContext);

        let acumDos = 0
        let acumUno 

        items.map((item) => {
        acumUno = item.price * item.cantidad
        acumDos = acumDos + acumUno
        return acumDos
    })

 

    return (
        <div className="containerCart">
            {console.log(items.length)}
            {items.length === 0 && <div className="containerEmptyCart"><p className="carritoVacío">Tu carrito esta vacío</p><Link className="liInicio" to="/">Volver al inicio</Link></div>}
            <div className="containCart">
                {
                    items.map((item) => (
                        <div key={item.id}>
                            <br /><br />
                            <h3>nombre:{item.name} id:{item.id} cantidad:{item.cantidad} precio:{item.price * item.cantidad}</h3>
                            <button className="btnDeleteProduct" onClick={() => removeItem(item.id)}>Borrar producto</button>
                        </div>
                    ))
                }
            </div>
            <div>Precio TOTAL = {acumDos}</div>
            <button className="btnEmptyCart" onClick={() => clearItems()}>Empty cart</button>
        </div>
    )
}


export default Cart;