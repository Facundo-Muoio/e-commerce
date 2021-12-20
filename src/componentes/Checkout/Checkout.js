import React, { useState } from 'react'
import "./Checkout.css";
import { collection, addDoc } from 'firebase/firestore';
import { db } from "../../firebase/firebaseConfig";

export const Checkout = () => {

    const initialState = {
        name:"",
        lastname:"",
        email:"",
        adress:""
    };

    const [values, setValues] = useState(initialState);

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setValues({...values, [name] : value})
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        console.log(values);
        const docRef= await addDoc(collection(db,"purchases"),{
            values,
        });
        console.log("ID document:", docRef.id); 
    };

    return (
        <div>
            <form className="formCheckOut" onSubmit={onSubmitHandler}>
                <input type="name" placeholder="name" name="name" value={values.name} onChange={onChangeHandler}></input>
                <input type="name" placeholder="lastname" name="lastname" value={values.lastname} onChange={onChangeHandler}></input>
                <input type="email" placeholder="email" name="email" value={values.email} onChange={onChangeHandler}></input>
                <input type="" placeholder="adress" name="adress" value={values.adress} onChange={onChangeHandler}></input>
                <button type="submit">Finalizar Compra</button>
            </form>
        </div>
    )
}
