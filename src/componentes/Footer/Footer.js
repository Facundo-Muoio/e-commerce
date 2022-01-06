import React, { useState } from 'react'
import { FaTruck } from "react-icons/fa";
import { FaGift } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { GrSend } from "react-icons/gr";
import "./Footer.css"
import posnet from "../assets/footer_e-posnet.png"
import mpago from "../assets/footer_mpago.png"
import security from "../assets/sectigo_trust_seal_md_2x.png"

export const Footer = () => {

    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    const [input, setInput] = useState("");
    const [result, setResult] = useState("")
    const [check, setCheck] = useState("")
   
   
   
    
    const campo = (e) => {
        setInput(e.target.value);
        setResult(emailRegex.test(e.target.value))
    }

    const chequear = () => {
        if(result === true){
            setCheck("inputSucces")
            setInput("")
        }else if(result === false){
            setCheck("inputError")
        }  
    }
    
    

    return (
        <div className="container-footer">
            <div className="container-envios-regalos">
                <div className="container-icons">
                    <FaTruck className='FaTruck' />
                </div>
                <div className="container__envios--p">
                    <p>ENVIO GRATIS EN ARGENTINA</p><br></br>
                    <span>En compras superiores a $2990</span>
                </div>       
                <div className="container-icons">
                    <FaGift className='FaTruck' />
                </div>
                <div className="container__regalos--p">
                    <p>TUS COMPRAS SUMAN PUNTOS</p><br></br>
                    <span>Para canjear en nuestras sucursales</span>
                </div>
            </div>
            <div className="container-novedades-promociones">
                <span>RECIBIR NOVEDADES Y PROMOCIONES</span>
                <input placeholder="Email" value={input} onChange={campo} className={check}></input>
                <button><GrSend className="GrSend" onClick={chequear}/></button>
            </div>
            <div className="container-redes">
                <p className="p--redes">REDES SOCIALES</p>
                <FaFacebook />
                <AiFillTwitterCircle className="iconTwitter"/>
                <AiFillInstagram  className="iconInstragram"/>
            </div>
            <div className="container-copyright">
                <span>Copyright © 1995-2022 Open Books Libros S.A. TODOS LOS DERECHOS RESERVADOS. TACUARÍ 1842 (C1139AAN) CABA - CUIT Nº: 30-53909781-0</span>
                <img alt="" src={mpago}></img>
                <img alt="" src={posnet}></img>
                <img alt="" src={security}></img>
            </div>
        </div>
    )
}
