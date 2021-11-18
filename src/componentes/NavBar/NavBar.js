import "./NavBar.css"
import { CartWidget } from "../CartWidget/CartWidget"

const NavBar = () => {

    return(
        <nav className="container">
            <ul>
                <li><a href="https://github.com/enimsidroweht/e-commerce">Home</a></li>
                <li><a href="https://github.com/enimsidroweht/e-commerce">Contacto</a></li>
                <li><a href="https://github.com/enimsidroweht/e-commerce">Perfil</a></li>
                <li><a href="https://github.com/enimsidroweht/e-commerce">Tienda</a></li>
            </ul>
            <CartWidget/>
        </nav>
    )
}

export default NavBar