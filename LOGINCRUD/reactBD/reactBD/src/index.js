import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/styles.css"
import ErrorBoundary from "./components/error";
import Home from "./components/home";
import Login from "./components/login"
import Info from "./components/info";
import Editar from "./components/editar";
import Eliminar from "./components/eliminar";
import Agregar from "./components/agregar";

const App = () => {
    return (
        <Router>
            <ErrorBoundary>
                <div>
                    <Switch>
                        <Route exact path="/Proyecto">
                            <Login />
                        </Route>
                        <Route exact path="/Proyecto/home">
                            <Home />
                        </Route>
                        <Route exact path="/Proyecto/info">
                            <Info />
                        </Route>
                        <Route exact path="/Proyecto/editar">
                            <Editar />
                        </Route>
                        <Route exact path="/Proyecto/eliminar">
                            <Eliminar />
                        </Route>
                        <Route exact path="/Proyecto/agregar">
                            <Agregar />
                        </Route>
                        <Route path="*" render={() => <h1>RECURSO NO ENCONTRADO1</h1>} />
                    </Switch>
                </div>
            </ErrorBoundary>
        </Router>
    );
}

export default App;