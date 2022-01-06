import React, { useState } from 'react'
import "./Checkout.css";
import { collection, addDoc } from 'firebase/firestore';
import { db } from "../../firebase/firebaseConfig";
import { MessageSucces } from '../MessageSucces/MessageSucces';

export const Checkout = () => {
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
        const docRef= await addDoc(collection(db,"purchases"),{
            values,
        });
        console.log("ID document:", docRef.id); 
        setPurchaseID(docRef.id)
    };
     



    return (
        <>
            <h3 class="h1Datos">COMPLETE CON SUS DATOS</h3>
            <form className="formCheckOut" onSubmit={onSubmitHandler}>
                <input type="name" placeholder="Nombre" name="name" value={values.name} onChange={onChangeHandler}></input>
                <input type="name" placeholder="Apellido" name="lastname" value={values.lastname} onChange={onChangeHandler}></input>
                <input type="email" placeholder="Email" name="email" value={values.email} onChange={onChangeHandler}></input>
                <input type="" placeholder="Dirección" name="adress" value={values.adress} onChange={onChangeHandler}></input>
                <button type="submit" onClick={messagePurchase} >FINALIZAR COMPRA</button>
            </form>
            {message ?  <MessageSucces id={purchaseID} />: ""}
        </>
    )
}

