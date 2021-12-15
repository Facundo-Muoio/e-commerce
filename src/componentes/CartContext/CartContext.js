import React, { createContext, useState } from 'react'


export const CartContext = createContext([]);


const CartProvider = ({children}) => {
    const [items, setItems] = useState([])   

    const isInCart = (id) => {
        const found = items.find((item) => item.id === id );
        return found 
    }

    const addItem = (item, qty) => {
        isInCart(item.char_id)
        ?
        setItems(items.map((prod) => {
            if(prod.id === item.char_id) {
                prod.cantidad += qty
            }
            return prod
        })) 
        :
         setItems([...items, {name: item.name, cantidad: qty, id: item.char_id, price: 150}]);
    }
    
    const removeItem = (id) =>{
        setItems(items.filter((item) => item.id !== id))
    }

    const clearItems = () => {
        setItems([])
    }

    return (
        <CartContext.Provider value={{items, addItem, removeItem, clearItems}}> 
            {children} 
        </CartContext.Provider>
    )
};  


export default CartProvider
