import React, { Component } from "react";
import Grilla from "../grilla/grilla";
import classes from "./layout.module.css";

class Layout extends Component {

  state = {
    numGrillas: 1,
    numFilas: 6,
    numColumnas: 2,
    estadosPosibles: ["X", "O"],
    estadosCeldas: []
  };

  inicializarEstados() {
    console.log("inicializar");
    let estadosCeldas = new Array(this.state.numColumnas*this.state.numFilas);
    for(let i = 0; i < estadosCeldas.length ; ++i){
      estadosCeldas[i] = i;
    }
    this.setState({estadosCeldas});
  };

  componentDidMount() {
    this.inicializarEstados();
  };

  handleGetValue(fila, columna){
    console.log("fila: " + fila);
    console.log("columna: " + columna);
    let index = fila*(this.state.numColumnas)+columna;
    let value = this.state.estadosCeldas[index];
    console.log(value);
    return value;
  };

  handleClick = value => {
    alert(value);
  };

  render() {
    let grillas = [];
    for (let i = 0; i < this.state.numGrillas; ++i) {
      grillas.push(i);
    }

    return (
      <div className={classes.layout}>
        {grillas.map((index) => {
          return (
            <Grilla
              key={index}
              numFilas={this.state.numFilas}
              numColumnas={this.state.numColumnas}
              handleClick={(value) => this.handleClick(value)}
              getValue={(fila, columna) => this.handleGetValue(fila, columna)}
            />
          );
        })}
      </div>
    );
  }
}

export default Layout;
