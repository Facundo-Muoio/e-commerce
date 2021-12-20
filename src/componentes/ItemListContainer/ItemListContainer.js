import React from 'react'
import "./ItemListContainer.css"
import ItemList  from './ItemList/ItemList'


export const ItemListContainer = ({greeting}) => {
    return (
        <>
          <p className="greeting">{greeting}</p> 
          <div className="containerBooks">
            <ItemList/>
          </div>
        </>
    )
}

export default ItemListContainer