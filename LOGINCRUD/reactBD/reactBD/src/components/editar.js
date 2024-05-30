import React from "react";
import { Redirect } from "react-router-dom"
import { Button, Container } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'; 
class Info extends React.Component {

    state = {
        id: "",
        pregunta: "",
        respuesta: "",
        drags: [],
        targets: []
    }

    componentDidMount() {
        const qId = new URLSearchParams(window.location.search).get("id");
        if (qId) {
            axios.get("Pregunta?id="+qId).then(response => {
                const question = response.data[0];
                this.setState({...question });               
            }).catch(error => {
                console.info(error);
                alert("Ha ocurrido un error");
            });
        }
    }
    validar=(pregunta,respuesta,imagen11, valor11,imagen12, valor12,imagen13, valor13,imagen14, valor14,imagen21, valor21,imagen22, valor22,imagen23, valor23,imagen24, valor24) =>{
        //fetch('http://localhost:8080/Proyecto/Login?User='+usuario+'&password='+password+'')
        const preid = new URLSearchParams(window.location.search).get("id");
        fetch('Editar?id='+preid+'&pregunta='+pregunta+'&respuesta='+respuesta+'&ima11='+imagen11+'&val11='+valor11+'&ima12='+imagen12+'&val12='+valor12+'&ima13='+imagen13+'&val13='+valor13+
        +'&ima14='+imagen14+'&val14='+valor14+'&ima21='+imagen21+'&val21='+valor21+'&ima22='+imagen22+'&val22='+valor22+'&ima23='+imagen23+'&val23='+valor23+'&ima24='+imagen24+'&val24='+valor24)
        .then(response => response.text())
        .then(usuario =>{
          let ret=usuario.includes("yes");
          console.log(ret);
          
          if(ret)
          {
            Swal.fire(
              'Actualizado',
              'Incluido',
              'success'
            )      
          }
          else          
          {
            Swal.fire(
              'No se pudo actualizar',
              'Error',
              'error'
            )                 
                              
          }
        })
     
    }


    render() {
        const { pregunta, respuesta, drags, targets } = this.state;
        return (
            <Container className="MarginContainer">
                <div className = "row justify-content-center my-5">
                    <div className="col-7 mt-6 ">
                        <div className="card shadow-sm p-3 mb-5 bg-white rounded">
                            <div className="card-header text-center">
                                <h3>Informacion de la pregunta a cambiar</h3>
                            </div>
                            <div className="card-body">
                                <form action="">
                                    <label className="form-label">Pregunta :  </label>
                                    <input className="form-control" type="text" defaultValue={pregunta} id ="pregunta" />
                                    <label className="form-label">Respuesta : </label>
                                    <input className="form-control" type="text" defaultValue={respuesta} id = "respuesta"/> 
                                    <div className="row">
                                        <label className="form-label"><b>Drag options</b> </label>
                                    </div>
                                    
                                    
                                    <div className="row">
                                    {
                                        
                                        drags.map((option,index) => {
                                            
                                            return (
                                                <div className="col">
                                                    <label className="form-label">link {index+10} : <input className="form control" type="text" defaultValue={option.imagen} id = {index+10}></input></label>
                                                    <img src={option.imagen} className="ImageContainer" />
                                                    <label className="form-label">Valor {index + 20} : <input className="form-control" type="text" defaultValue={option.valor} id = {index+20}></input></label>
                                  
                                                </div>
                                            );
                                        })

                                    }
                                    </div>
                                    <label className="form-label"><b>Target Options</b></label>
                                
                                    <div className="row">
                                        {
                                            targets.map((target,index) => {
                                                let valor  = 0;
                                                return (
                                                    <div className="col">
                                                        <label className="form-label">link {index} : {valor} <input className="form-control" type="text" defaultValue={target.imagen} id = {index+30}></input></label>
                                                        
                                                        <img src={target.imagen} className="ImageContainer" />
                                                        <label className="form-label">valor : <input className="form-control" type="text" defaultValue={target.valor} id = {index+40}></input></label>
                                                        
                                                    </div>
                                                    
                                                )
                                                ;
                                            }
                                            )
                                        }
                                    </div>
                                    <div className="d-grid m-3">
                                        <Button  variant="success"  onClick={() => this.validar(
                                            document.getElementById("pregunta").value,
                                            document.getElementById("respuesta").value,
                                            document.getElementById("10").value,
                                            document.getElementById("20").value,
                                            document.getElementById("11").value,
                                            document.getElementById("21").value,
                                            document.getElementById("12").value,
                                            document.getElementById("22").value,
                                            document.getElementById("13").value,
                                            document.getElementById("23").value,
                                            document.getElementById("30").value,
                                            document.getElementById("40").value,
                                            document.getElementById("31").value,
                                            document.getElementById("41").value,
                                            document.getElementById("32").value,
                                            document.getElementById("42").value,
                                            document.getElementById("33").value,
                                            document.getElementById("43").value
                                            )} >
                                            EDITAR ♥
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