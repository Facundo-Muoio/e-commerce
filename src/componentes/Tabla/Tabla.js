import React, { useContext } from 'react' 
import { CartContext } from "../CartContext/CartContext"
import { Table } from "react-bootstrap"
import "./Tabla.css"
import { FaTrash } from "react-icons/fa"

export const Tabla = ({items}) => {

    const {removeItem} = useContext(CartContext);

    return (
            <div>
                <Table striped bordered hover variant="dark">
                    <thead>
                            <tr>
                                <th>Img</th>
                                <th>Titulo</th>
                                <th>Autor</th>
                                <th>Cantidad</th>
                                <th>Precio</th>
                                <th></th>
                            </tr>
                    </thead>
                    <tbody>
                            {
                              items.map((item) => (
                                  <tr className="tr">
                                      <td><img className="imgSize"src={item.img} alt={item.titulo}></img></td>
                                      <td>{item.titulo.toUpperCase()}</td>
                                      <td>{item.autor.toUpperCase()}</td>
                                      <td>{item.cantidad}</td>
                                      <td>$ {item.price}</td>
                                      <td><button className="btnTrash" onClick={() => removeItem(item.id)}><FaTrash className="FaTrash"/></button></td>
                                  </tr>
                              ))  
                            }
                    </tbody>
                </Table>
            </div>
    )
}
