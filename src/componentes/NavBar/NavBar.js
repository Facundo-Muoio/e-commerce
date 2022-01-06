import "./NavBar.css"
import { CartWidget } from "../CartWidget/CartWidget"
import {Link} from "react-router-dom"


const NavBar = () => {

    return(
        <nav className="containerNavBar">
            <ul className="ul-principal">
                <Link className="li" to="/">Home</Link>
                <Link className="li" to="/contact">Contacto</Link>
                <li className="li">Categorías
                    <ul>
                        <Link className ="li" to="/categorys/fantasía">Fantasía</Link>
                        <Link className ="li" to="/categorys/infantil">Infantil</Link>
                        <Link className ="li" to="/categorys/Juegos - Deportes - Recreación">Juegos - Deportes - Recreación</Link>
                        <Link className ="li" to="/categorys/terror">Terror</Link>
                    </ul>
                </li>
            </ul>
            <CartWidget/>
        </nav>
    )
}

export default NavBar