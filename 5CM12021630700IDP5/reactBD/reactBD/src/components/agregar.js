import React from "react";
import { Redirect } from "react-router-dom"
import { Button, Container } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'; 
class Info extends React.Component {

    
    validar=(pregunta,respuesta,imagen11, valor11,imagen12, valor12,imagen13, valor13,imagen14, valor14,imagen21, valor21,imagen22, valor22,imagen23, valor23,imagen24, valor24) =>{
        //fetch('http://localhost:8080/Proyecto/Login?User='+usuario+'&password='+password+'')
        /*llamada a la API utilizando el método fetch */
        fetch('Agregar?pregunta='+pregunta+'&respuesta='+respuesta+'&ima11='+imagen11+'&val11='+valor11+'&ima12='+imagen12+'&val12='+valor12+'&ima13='+imagen13+'&val13='+valor13+
        +'&ima14='+imagen14+'&val14='+valor14)
        .then(response => response.text())
        .then(usuario =>{
          let ret=usuario.includes("yes");
          console.log(ret);
          
          if(ret)
          {
            Swal.fire(
              'Vocal agregada',
              'Vocal valida',
              'success'
            )      
          }
          else          
          {
            Swal.fire(
              'No se agrego la vocal',
              'Error',
              'error'
            )                 
          }
          if(ret){
            return <Redirect to='/Proyecto/home'/>;
          }
        })
     
    }


    render() {
        return (
            <Container className="MarginContainer">
                
                <div className = "row justify-content-center my-5">
                  <div className="col-7 mt-6 ">
                    <div className="card shadow-sm p-3 mb-5 bg-white rounded">
                      <div className="card-header text-center">
                        <h3 className="AlignCenter" > Agregar Vocal </h3>
                      </div>
                      <div className="card-body">
                        <form action="">
                          <label className="form-label">Vocal :</label> 
                          <input className="form-control" type="text" placeholder="Nombre de la vocal" id ="pregunta" />
                          <label className="forma-label">Descripcion: </label>
                          <input className="form-control" type="text" placeholder="Detalles" id = "respuesta"/> 
                          
                          <label className="form-label"><b>Archivo de Audio</b></label>
                           
                                             
                              <input className="form-control m-2" type="text" placeholder="Nombre del archivo de audio 1" id = "10"></input> 
                              <input className="form-control m-2" type="text" placeholder="Descripcion" id = "20"></input> 
                              <input className="form-control m-2" type="text" placeholder="Nombre del archivo de audio 2" id = "11"></input> 
                              <input className="form-control m-2" type="text" placeholder="Descripcion" id = "21"></input> 
                              
                          
                          <label className="form-label"><b>Grabar Audio</b></label>
                          
                              <input className="form-control m-2" type="text" placeholder="Nombre de la grabacion" id = "30"></input> 
                              <input className="form-control m-2" type="text" placeholder="Descripcion" id = "40"></input> 

                          <div className="d-grid" >
                          <Button  variant="success" id="color2" onClick={() => this.validar(
                              document.getElementById("pregunta").value,
                              document.getElementById("respuesta").value,
                              document.getElementById("10").value,
                              document.getElementById("20").value,
                              document.getElementById("11").value,
                              document.getElementById("21").value,
                              document.getElementById("30").value,
                              document.getElementById("40").value,
                              )}>
                              Incluir
                          </Button>
                          </div>
                          
                      </form>                  
                
                        <div className="d-grid m-3">
                        <Button
                            variant="success"
                            className="M-6">
                            <Link to={`/Proyecto/home`} className="link-light" >
                                CRUD
                            </Link>
                        </Button>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
            </Container>
        )
    }
}

export default Info;