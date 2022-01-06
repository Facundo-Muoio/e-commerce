import React from 'react'
import "./Header.css"
import { GiBookCover } from "react-icons/gi";
import {Link} from "react-router-dom"

const Header = () => {
    return (
        <>
            <div className="headerContainer">
                <Link to="/">
                    <h1 className="logo">OPEN <GiBookCover className="bookIcon"/> BOOKS</h1>
                </Link>
            </div>  
        </>
    )
}

export default Header 