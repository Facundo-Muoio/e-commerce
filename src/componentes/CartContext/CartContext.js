import React, { createContext, useState } from 'react'


export const CartContext = createContext([]);


const CartProvider = ({children}) => {
    const [items, setItems] = useState([])   

    const isInCart = (id) => {
        const found = items.find((item) => item.id === id)
        return found;
    }

    const addItem = (item, qty) => {
        isInCart(item.id) 
        ?
        setItems(items.map((prod) => {
            if(prod.id === item.id) {
                prod.cantidad += qty
            }
            return prod
        })) 
        :
         setItems([...items, {titulo: item.titulo, 
                              cantidad: qty, 
                              id: item.id, 
                              price: item.precio, 
                              img: item.img, 
                              idioma: item.idioma,
                              autor: item.autor,
                              editorial: item.editorial,
                              categoría: item.categoría,
                              nroPáginas: item["número de páginas"],
                              fechaPublicación: item["fecha de publicación"]}]);
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
