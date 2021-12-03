import React,{useEffect, useState} from 'react'
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from 'react-router';


const ItemDetailContainer = () => {
    let id = useParams();
    console.log("ID:", id)
    let idItem = id.id
    const [item, setItem] = useState([]);
  
    useEffect(() => {
        setTimeout(() => {
            fetch(`https://www.breakingbadapi.com/api/characters/${idItem}`)
            .then((response) => response.json())
            .then(JSON => setItem(JSON[0]))
        }, 1500) 
    }, [idItem])

    
    return (
        
        <>
            <ItemDetail otro={item} />
        </>
    )
}

export default ItemDetailContainer