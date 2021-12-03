import React from 'react'
import "./Header.css"
import btcLogo from "../assets/btcLogo.png"
import {Link} from "react-router-dom"

const Header = () => {
    return (
        <>
            <div className="headerContainer">
                <Link to="/">
                    <img src={btcLogo} className="btcLogo" alt="btcLogo"></img>
                </Link>
            </div>  
        </>
    )
}

export default Header 