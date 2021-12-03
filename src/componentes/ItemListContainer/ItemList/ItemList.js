import React, {useEffect, useState} from 'react'
import "../Item/Item"
import Item from '../Item/Item';
import { Link } from "react-router-dom"

const ItemList = () => {

    const [items, setItems] = useState([])
    
      useEffect(() =>{
      setTimeout(()=>{
          fetch('https://www.breakingbadapi.com/api/characters')
              .then(response => response.json())
              .then(json => setItems(json))      
      }, 2000)     
    }, [])
    
  
    return (
        <>
            {items.map((item) => {
                return <Link to={`/detail/${item.char_id}`} key={item.char_id}>
                            <Item data={item}/>
                        </Link>
            })}
        </>
    )
}

export default ItemList
