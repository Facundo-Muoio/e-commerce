import {FaShoppingCart} from "react-icons/fa"
import "./CartWidget.css"
import React, {useContext} from 'react'
import { CartContext } from "../CartContext/CartContext"
import {Link} from "react-router-dom"


export const CartWidget = () => {

    const { items } = useContext(CartContext);
    let itemsInCart = 0

    items.map((items) => {
       return itemsInCart = itemsInCart + items.cantidad
    })


    return (
        <>
            <div>
                {itemsInCart === 0 ? "" : itemsInCart }
                <Link to="/Cart"><FaShoppingCart className="icono-carrito"/> </Link>
            </div>
        </>
    )
}
