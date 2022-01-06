import React, {useEffect, useState} from 'react'
import "./ItemList.css"
import "../Item/Item"
import Item from '../Item/Item';
import { Link } from "react-router-dom"
//firebase 
import { db } from "../../../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore"
import { FaSearch } from "react-icons/fa";


const ItemList = () => {

    const [items, setItems] = useState([])
    const [searchItems, setSearchItems] = useState("")
    const [itemsFiltered, setItemsFiltered] = useState([])


    useEffect(() => {
        const getBooks = async() => {
            const docs = []
            const q = query(collection(db, "libros"));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id: doc.id});
            });
            setItems(docs);
            setItemsFiltered(docs)
        }
        getBooks()
    }, []);    


    const search = (e) => {
        setSearchItems(e.target.value)
        filter(e.target.value)
     }


    const filter = (busqueda) => {
        let filteredItems = items.filter((item) => {
             if(item.titulo.toString().toLowerCase().includes(busqueda.toLowerCase()) || 
             item.autor.toString().toLowerCase().includes(busqueda.toLowerCase())){
                return item;
             } else if(busqueda === ""){
                setItemsFiltered(items)
             }
         })
        setItemsFiltered(filteredItems);
     }
  


    return (
        <>
            <div className='containerInput'>
                <input className="inputSearch" value={searchItems} onChange={search} placeholder='Búsqueda por titulo u autor'></input><FaSearch className="FaSearch"/>
            </div>
            {itemsFiltered.map((item) => {
                return <Link to={`/detail/${item.id}`} key={item.id}>
                            <Item data={item}/>
                        </Link>
            })}
        </>
    )
}

export default ItemList
