import "./NavBar.css"
import { CartWidget } from "../CartWidget/CartWidget"
import {Link} from "react-router-dom"


const NavBar = () => {

    return(
        <nav className="containerNavBar">
            <ul>
                <Link className="li" to="/">Home</Link>
                <Link className="li" to="/about">About</Link>
                <Link className="li" to="/contact">Contact</Link>
                <Link className ="li" to="/category/fantasia">Fantasía</Link>
            </ul>
            <CartWidget/>
        </nav>
    )
}

export default NavBar