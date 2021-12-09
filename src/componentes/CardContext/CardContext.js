import React, { createContext, useState } from 'react'

export const CardContext = createContext();

const initialState = [{id:1, name:"uno"},{id:1, name:"dos"},{id:1, name:"tres"}]

const CardProvider = (props) => {
    const [card, setCard] = useState(initialState);

    return <CardContext.Provider value={[card, setCard]}> {props.children} </CardContext.Provider>
    
};


export default CardProvider
