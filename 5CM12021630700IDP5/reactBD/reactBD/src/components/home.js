import React from "react";
import { Button, Container, Table, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pregunta from "./pregunta";
import Swal from 'sweetalert2';
import axios from "axios";
import ErrorBoundary from "./error";
import "../styles/home.css";

class Home extends React.Component {
  state = {
    data: [],
    showAlert: false,
    alertText: ""
  }

  componentDidMount() {
    axios.get("Preguntas").then(response => {
      const validData = response.data.filter(item => item && item.id); // Filtrar items inválidos
      this.setState({ data: validData });
    }).catch(error => {
      console.info(error);
      this.setState({ showAlert: true, alertText: "ERROR EN LA OBTENCIÓN DE DATOS" });
    });
  }

  render() {
    const { data, showAlert, alertText } = this.state;
    return (
      <ErrorBoundary>
        <Container className="MarginContainer ">
          <h1 className="AlignCenter" id="titulo3"> CREAR, ALTAS, BAJAS Y CAMBIOS </h1>
          <div className="con1" id="alinear"> C R U D </div>
          <hr style={{ width: "80%" }} />
          {
            showAlert &&
            <Alert variant="danger">
              {alertText}
            </Alert>
          }
          <Button variant="info" style={{ margin: "12px" }}>
            <Link to="/Proyecto/agregar" >NUEVA VOCAL</Link>
          </Button>
          <Table striped className="con2" id="alinear">
            <thead>
              <tr>
                <th>Vocales</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map(pregunta => (
                  pregunta && pregunta.id ? (
                    <Pregunta key={pregunta.id} {...pregunta} />
                  ) : (
                    console.error("Item de datos inválido:", pregunta)
                  )
                ))
              }
            </tbody>
          </Table>
          </Container>
      </ErrorBoundary>
    )
  }
}

export default Home;
