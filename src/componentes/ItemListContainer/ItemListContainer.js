import React from 'react'
import "./ItemListContainer.css"
import ItemList  from './ItemList/ItemList'



export const ItemListContainer = () => {
    return (
        <>
          <div className="containerBooks">
            <ItemList/>
          </div>
        </>
    )
}

export default ItemListContainer
