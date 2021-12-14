import {FaShoppingCart} from "react-icons/fa"
import "./CartWidget.css"
import React, {useContext} from 'react'
import { CartContext } from "../CartContext/CartContext"


export const CartWidget = () => {

    const { items } = useContext(CartContext);
    let itemsInCart = 0

    items.map((items) => {
        itemsInCart = itemsInCart + items.cantidad
    })



    return (
        <>
            <div>
                {itemsInCart === 0 ? "" : itemsInCart }
                <FaShoppingCart className="icono-carrito"/> 
            </div>
        </>
    )
}
