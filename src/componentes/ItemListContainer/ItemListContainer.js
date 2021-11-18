import React from 'react'
import "./ItemListContainer.css"


export const ItemListContainer = ({greeting}) => {
    return (
        <>
          <p className="greeting">{greeting}</p>  
        </>
    )
}

export default ItemListContainer