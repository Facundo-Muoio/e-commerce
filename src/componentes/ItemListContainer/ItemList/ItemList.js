import React, {useEffect, useState} from 'react'
import "../Item/Item"
import Item from '../Item/Item';

const ItemList = () => {

    const [users, setUsers] = useState([])
    
    setTimeout(  useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setUsers(json))  
    }, []), 3000)
  
    return (
        <>
            {users.map((user) => {
                return <Item data={user} key={user.id} />;
            })}
        </>
    )
}

export default ItemList
