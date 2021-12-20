import React,{useEffect, useState} from 'react';
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router';
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore"; 


const ItemDetailContainer = () => {
    let id = useParams();
    let idItem = id.id
    const [item, setItem] = useState([]);
    
    const book = item.filter((book) => {
        return book.id === idItem
    })


    useEffect(() => {
       const getBooks = async () =>{
            const docs = []
            const q = query(collection(db, "libros"));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id: doc.id})
            });
            setItem(docs);
        }
        getBooks()
    }, []);


    return (
        
        <>
            {book.map((libro) => {
                return  <ItemDetail otro={libro} key={libro.id} />;
            })}
        </>
    )
}

export default ItemDetailContainer