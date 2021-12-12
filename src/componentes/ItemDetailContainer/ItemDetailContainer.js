import React,{useEffect, useState} from 'react'
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from 'react-router';


const ItemDetailContainer = () => {
    let id = useParams();
    let idItem = id.id
    const [item, setItem] = useState([]);
  
    useEffect(() => {
        setTimeout(() => {
            fetch(`https://www.breakingbadapi.com/api/characters/${idItem}`)
            .then((response) => response.json())
            .then(res => setItem(res[0]))
        }, 1500) 
    }, [idItem])

    
    return (
        
        <>
            <ItemDetail otro={item} />
        </>
    )
}

export default ItemDetailContainer