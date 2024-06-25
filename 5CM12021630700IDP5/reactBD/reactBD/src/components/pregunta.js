import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/home.css";

const Pregunta = ({ id, pregunta }) => {
    return (
        <tr>
            <td>{pregunta}</td>
            <td className="AlignCenter">
                <Button
                    variant="success"
                    className="M-6 boton1">
                    <Link to={`/Proyecto/info?id=${id}`} className="CustomLink">
                        Ver vocal
                    </Link>
                </Button>
                <Button
                    variant="warning"
                    className="M-6 boton2">
                    <Link to={`/Proyecto/editar?id=${id}`} className="CustomLink">
                        Editar vocal
                    </Link>
                </Button>
                <Button
                    variant="danger"
                    className="M-6 boton3">
                    <Link to={`/Proyecto/eliminar?id=${id}`} className="CustomLink">
                        Eliminar vocal
                    </Link>                    
                </Button>
            </td>
        </tr>
    )
}
export default Pregunta;