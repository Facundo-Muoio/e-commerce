import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom"
//firebase 
import { db } from "../../../firebase/firebaseConfig"
import { collection, query, getDocs, where } from "firebase/firestore"
import Item from "../../../componentes/ItemListContainer/Item/Item"
import "./BookByCategory.css"


export const BookByCategory = () => {
     let bookCategorys = useParams()
     const [items, setItems] = useState([])
    
    useEffect(() => {
        const getBooks = async() => {
            const docs = []
            const q = query(collection(db, "libros"), where("categoría", "==", bookCategorys.category));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id: doc.id});
            });
            setItems(docs);
        }
        getBooks()
    }, [bookCategorys.category]);     
  
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


