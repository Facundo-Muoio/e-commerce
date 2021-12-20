import React, {useEffect, useState} from 'react'
import { Link } from "react-router-dom"
//firebase 
import { db } from "../../../firebase/firebaseConfig"
import { collection, query, getDocs, where } from "firebase/firestore"
import Item from "../../../componentes/ItemListContainer/Item/Item"
import "./Fantasía.css"


export const Fantasía = () => {

    const [items, setItems] = useState([])
    

    useEffect(() => {
        const getBooks = async() => {
            const docs = []
            const q = query(collection(db, "libros"), where("categoría", "==", "fantasía"));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id: doc.id});
            });
            setItems(docs);
        }
        getBooks()
    }, []);     
  
    return (
        <>
            <div className="containerFantasía">
            {items.map((item) => {
                return <Link to={`/detail/${item.id}`} key={item.id}>
                            <Item data={item}/>
                        </Link>         
            })}    
            </div>
        </>
    )
}


