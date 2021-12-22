import React, { useState, useContext } from 'react'
import "./Checkout.css";
import { collection, addDoc } from 'firebase/firestore';
import { db } from "../../firebase/firebaseConfig";
import { CartContext  } from '../CartContext/CartContext';
import { MessageSucces } from '../MessageSucces/MessageSucces';

export const Checkout = () => {
    const { items } = useContext(CartContext);
    const [message, setMessage] = useState();
    const [purchaseID, setPurchaseID] = useState("")
    
    const messagePurchase = () => {
        setMessage(true);
    } 

    const initialState = {
        name:"",
        lastname:"",
        email:"",
        adress:""
    };

    const [values, setValues] = useState(initialState);

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setValues({...values, [name ]: value})
    }

    

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        console.log(values);
        const docRef= await addDoc(collection(db,"purchases"),{
            values,
        });
        console.log("ID document:", docRef.id); 
        setPurchaseID(docRef.id)
    };
     



    return (
        <>
            <form className="formCheckOut" onSubmit={onSubmitHandler}>
                <input type="name" placeholder="name" name="name" value={values.name} onChange={onChangeHandler}></input>
                <input type="name" placeholder="lastname" name="lastname" value={values.lastname} onChange={onChangeHandler}></input>
                <input type="email" placeholder="email" name="email" value={values.email} onChange={onChangeHandler}></input>
                <input type="" placeholder="adress" name="adress" value={values.adress} onChange={onChangeHandler}></input>
                <button type="submit" onClick={messagePurchase}>Finalizar Compra</button>
            </form>
            {message ?  <MessageSucces id={purchaseID} />: ""}
        </>
    )
}

