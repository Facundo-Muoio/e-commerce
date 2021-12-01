import React,{useEffect, useState} from 'react'
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
  
    useEffect(() => {
        setTimeout(() => {
            fetch("https://api.mercadolibre.com/sites/MLA/search?q=Adidas&limit=1")
            .then((response) => response.json())
            .then(JSON => setItem(JSON.results[0]));
        }, 2000)
    }, [])
    
    
    return (
        
        <>
            <ItemDetail data={item} />;
        </>
    )
}

export default ItemDetailContainer