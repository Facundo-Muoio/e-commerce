import React from 'react'
import "./Contact.css"
// import Home from "../Home/Home"
// import About from '../About/About'


const Contact = () => {

    const submit = (e) => {
        e.preventDefault()
        document.getElementById("myForm").reset();
    }


    return (
        <div className="containerContact">
            <h1>Atención al cliente</h1>
            <p>Puede contactarse con atención al cliente enviando un email a info@openbooks.com</p>
            <p>
                Para consultas sobre su compra on line o si tiene dudas de cómo comprar, 
                envíe un email a ventas@openbooks.com, incluyendo el número de orden o llame al (54) 11 5237 1105.
                Horario de atención de lunes a sábado de 9.00 a 19.00 (hora argentina)
            </p>
            <p>Para consultas sobre la tarjeta openmax, envie un email a infomax@openbooks.com</p>
            <p>Por otros temas y consultas utilice el siguiente formulario. Podrá elegir el tema de su consulta en el menú desplegable del "Asunto".</p>
            <form className="formContact" id="myForm">
               <div>
                    <select>
                        <option value="0">Información libros</option>
                        <option value="1">Mi compra online</option>
                        <option value="2">Reportar problemas o sugerencias de la web</option>
                        <option value="3">Departamento promoción secundario y universitario</option>
                        <option value="4">Eventos y presentaciones de libros</option>
                        <option value="5">Suscripciones por mail</option>
                        <option value="6">Compras mayoristas</option>
                        <option value="7">Trabajar en Cúspide</option>
                        <option value="8">Otros</option>
                    </select>
                    <input  type="name" required="required" placeholder="Nombre *"></input>
                    <input type="email"  required="required" placeholder="Email *"></input>
                    <button type="submit" onClick={submit   }>ENVIAR</button>
               </div>
                <textarea required="required">
                </textarea>
            </form>
        </div>
    )
}

export default Contact