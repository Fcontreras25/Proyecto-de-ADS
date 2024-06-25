import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from "react";
import { Redirect } from "react-router-dom";

class Login extends React.Component {
  constructor() {
    super();
    this.userInputRef = React.createRef();
    this.passwordInputRef = React.createRef();
    this.state = { condition: false };
  }

  validar = (usuario, password) => {
    fetch('Login?User=' + usuario + '&password=' + password)
      .then(response => response.text())
      .then(responseText => {
        let ret = responseText.includes("yes");

        if (ret) {
          this.setState({ condition: true });
          toast.success("USUARIO VÁLIDO");
        } else {
          this.setState({ condition: false });
          toast.error("USUARIO NO VÁLIDO");
          if (this.userInputRef.current) {
            this.userInputRef.current.value = "";
          }
          if (this.passwordInputRef.current) {
            this.passwordInputRef.current.value = "";
          }
        }
      });
  }

  render() {
    const styles = {
      padding: '5px'
    }

    const { condition } = this.state;

    if (condition) {
      return <Redirect to='/Proyecto/home' />;
    }

    return (
      <div className="center-container" style={styles} id="equis">
        <h1 className="AlignCenter" id="titulo"> Reconocimiento de Vocales </h1>
        <div className='contenedor tam'>
          <h2 className="AlignCenter" id="titulo2"> Contreras Martínez Fatima Belén </h2>
          <h2 className="AlignCenter" id="titulo2"> Villalobos Sánchez Ezequiel </h2>
        </div>
        <div className="conte1 espacios">
          <div className="form-group">
            <label className="visually-hidden" htmlFor="specificSizeInputGroupUsername"> Username </label>
            <div className="input-group zoom">
              <div className="input-group-text contenedor"> @ </div>
              <input
                placeholder="Ingrese el usuario"
                type="text"
                id="User"
                className="form-control contenedor zoom"
                ref={this.userInputRef}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="password"> Password </label>
            <input
              placeholder="Ingrese su contraseña"
              type="password"
              id="password"
              className="form-control contenedor"
              ref={this.passwordInputRef}
            />
          </div>
          <button
            className="btn btn-primary" id="color"
            onClick={() => this.validar(this.userInputRef.current.value, this.passwordInputRef.current.value)}
          >
            Submit
          </button>
        </div>
        <ToastContainer />
      </div>
    )
  }
}

export default Login;
