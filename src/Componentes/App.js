//@ts-nocheck

import operaciones from "../logic/oparaciones";
import Display from "./Display";
import PanelDeBotones from "./PanelDeBotones";
import { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    total: null,
    siguiente: null,
    operador: null,
  }
  handlerClick = nombreDeBoton => this.setState(operaciones(this.state,nombreDeBoton))

  render() {
  return (
    <div className="component-app" >
      <Display value={this.state.siguiente || this.state.total || "0"}/>
      <PanelDeBotones clickHandler={this.handlerClick}/>
    </div>
  );
  }
}


export default App;
