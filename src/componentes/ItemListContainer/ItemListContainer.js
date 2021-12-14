import React from 'react'
import "./ItemListContainer.css"
import ItemList  from './ItemList/ItemList'


export const ItemListContainer = ({greeting}) => {
    return (
        <>
          <p className="greeting">{greeting}</p> 
          <h1>Desarolladores del Token</h1>
          <div className="display__devs">
            <ItemList/>
          </div>
        </>
    )
}

export default ItemListContainer