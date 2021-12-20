import React, { useContext } from 'react'
import { CartContext } from"../../componentes/CartContext/CartContext"
import "./Cart.css"
import {Link} from "react-router-dom"
import {Checkout} from "../../componentes/Checkout/Checkout"

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
            {items.length === 0 && <div className="containerEmptyCart"><p className="carritoVacío">Tu carrito esta vacío</p><Link className="liInicio" to="/">Volver al inicio</Link></div>}
            <div className="containCart">
                {
                    items.map((item) => (
                        <div key={item.id}>
                            <br /><br />
                            <span><img src={item.img} alt={item.titulo} className="imgCartBook"></img></span>
                            <span>{item.titulo}{item.autor}{item.cantidad}${item.price}</span>
                            <button className="btnDeleteProduct" onClick={() => removeItem(item.id)}>Borrar producto</button>
                        </div>
                    ))
                }
            </div>
            <div>Precio TOTAL = {acumDos}</div>
            <button className="btnEmptyCart" onClick={() => clearItems()}>Empty cart</button>
            {items.length !== 0 && <Checkout/>}
        </div>
    )
}


export default Cart;