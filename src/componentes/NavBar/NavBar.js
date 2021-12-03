import "./NavBar.css"
import { CartWidget } from "../CartWidget/CartWidget"
import {Link} from "react-router-dom"

const NavBar = () => {

    return(
        <nav className="container">
            <ul>
                <Link className="li" to="/">Home</Link>
                <Link className="li" to="/about">About</Link>
                <Link className="li" to="/contact">Contact</Link>
            </ul>
            <CartWidget/>
        </nav>
    )
}

export default NavBar