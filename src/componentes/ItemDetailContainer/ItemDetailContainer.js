import React,{useEffect, useState} from 'react';
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router';
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs, where, documentId } from "firebase/firestore"; 


const ItemDetailContainer = () => {
    let id = useParams();
    let idItem = id.id
    const [item, setItem] = useState([]);
    
    useEffect(() => {
       const getBooks = async () =>{
            const docs = []
            const q = query(collection(db, "libros"), where(documentId(), "==", idItem));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id: doc.id})
            });
            setItem(docs);
        }
        getBooks()
    }, [idItem]);


    return (
        
        <>
            {item.map((libro) => {
                return  <ItemDetail otro={libro} key={libro.id} />;
            })}
        </>
    )
}

export default ItemDetailContainer