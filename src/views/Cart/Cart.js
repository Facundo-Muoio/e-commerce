import React, { useContext } from 'react'
import { CartContext } from"../../componentes/CartContext/CartContext"
import "./Cart.css"

export const Cart = () => {

    const {items, removeItem, clearItems} = useContext(CartContext);



    return (
        <div className="containerCart">
            <div className="containCart">
                {
                    items.map((item) => (
                        <div key={item.id}>
                            <br /><br />
                            <h3>nombre:{item.name} id:{item.id} cantidad:{item.cantidad} </h3>
                            <button className="btnDeleteProduct" onClick={() => removeItem(item.id)}>Borrar producto</button>
                        </div>
                    ))     
                }
            </div>
            <button className="btnEmptyCart" onClick={() => clearItems()}>Empty cart</button>
        </div>
    )
}


export default Cart;