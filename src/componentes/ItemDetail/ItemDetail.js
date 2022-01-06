import React, { useContext, useState } from 'react'
import { CartContext } from "../CartContext/CartContext"
import ItemCount from '../ItemCount/ItemCount'
import "./ItemDetail.css"



const ItemDetail = ({otro}) => {

    const { addItem } = useContext(CartContext)
    const [biografia, setBiografia] = useState("")
    const [sinopsis, setSinopsis] = useState("")

    const handlerSinopsis = () => {
        setSinopsis(otro.sinópsis)
        setBiografia("")
    }

    const handlerBiografia = () => {
        setBiografia(otro.biografía)
        setSinopsis("")
    }
    
    return (
       <>
            <div className="containerDetail">
                <div className="containerCardItemDescription">
                    <img src={otro.img} alt={otro.titulo} width={300}/>
                    <ItemCount item={otro} stock={otro.stock} initial={1} addItem={addItem} />
                </div>
                <div className="containerDescripción">
                    <h1>{otro.titulo}</h1>
                    <h1>{otro.autor}</h1>
                    <h5>Disponibilidad: {otro.stock}</h5>
                    <h1 className="detailPrecio">${otro.precio}</h1>
                    <h6>Editorial: {otro.editorial}</h6>
                    <h6>Idioma: {otro.idioma}</h6>
                    <h6>Clasificación: {otro.categoría}</h6>
                    <h6>Fecha Publicación: {otro["fecha de publicación"]}</h6>
                    <h6>Número de Páginas: {otro["número de páginas"]}</h6>
                </div>     
            </div>
            <div className="container-NavBook">
                    <div className="container-btn-NavBook">
                        <button className="btn-NavBook" onClick={handlerSinopsis}>SINÓPSIS</button>
                        <button className="btn-NavBook" onClick={handlerBiografia}>BIOGRAFÍA</button>
                    </div> 
                    <p className="sinopsis--biografia">
                        {sinopsis}{biografia}
                    </p>       
            </div>   
       </>
    )
}

export default ItemDetail