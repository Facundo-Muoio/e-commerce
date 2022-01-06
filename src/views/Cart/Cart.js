import React, { useContext } from 'react'
import { CartContext } from"../../componentes/CartContext/CartContext"
import "./Cart.css"
import {Link} from "react-router-dom"
import {Checkout} from "../../componentes/Checkout/Checkout"
import {Tabla} from"../../componentes/Tabla/Tabla"

export const Cart = () => {

    const {items, clearItems} = useContext(CartContext);

        let acumDos = 0
        let acumUno 

        items.map((item) => {
        acumUno = item.price * item.cantidad
        acumDos = acumDos + acumUno
        return acumDos
    })

    return (
        <div className="containerCart">
            {items.length === 0 && <div className="containerEmptyCart"><p className="carritoVacío">Tu carrito esta vacío</p><Link className="liInicio" to="/">Volver al inicio</Link></div>}
            <div className="containCart">
                {items.length === 0 ? "" : <Tabla items={items} />}
            </div>
            <div className="priceTotal">
                <p>TOTAL A PAGAR: $ {acumDos}</p>
            </div>
            {items.length === 0 ? "" : <button className="btnEmptyCart" onClick={() => clearItems()}>vaciar carrito</button>}   
            {items.length !== 0 &&<Checkout/>}
        </div>
    )
}


export default Cart;