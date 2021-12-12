import React, { createContext, useState } from 'react'


export const CardContext = createContext([]);


const CardProvider = ({children}) => {
    const [items, setItems] = useState([])

    
    const addItem = (item, qty) => {
         setItems([...items, {name:item.name , cantidad: qty}])
         console.log(items);
    }
    
    return (
        <CardContext.Provider value={{items, addItem}}> 
            {children} 
        </CardContext.Provider>
    )
};  


export default CardProvider
