import React, { Component } from "react";
import Grilla from "../grilla/grilla";
import classes from "./layout.module.css";

class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numGrillas: 1,
      numFilas: 4,
      numColumnas: 4,
      estadosPosibles: [" ", "X", "O"],
      estadosCeldas: []
    };
  }

  inicializarEstados() {
    let estadosCeldas = new Array(this.state.numColumnas * this.state.numFilas);
    for (let i = 0; i < estadosCeldas.length; ++i) {
      estadosCeldas[i] = this.state.estadosPosibles[0];
    }
    this.setState({ estadosCeldas });
  }

  componentDidMount() {
    this.inicializarEstados();
  }

  getArrayIndex = (fila, columna) => {
    return fila * this.state.numColumnas + columna;
  };

  handleGetValue = arrayIndex => {
    return this.state.estadosCeldas[arrayIndex];
  };

  handleClick = arrayIndex => {
    let estadoActual = this.state.estadosCeldas[arrayIndex];
    let nuevoEstado = [...this.state.estadosCeldas];

    for (let i = 0; i < this.state.estadosPosibles.length; ++i) {
      if (estadoActual === this.state.estadosPosibles[i]) {
        if (this.state.estadosPosibles[i + 1]) {
          nuevoEstado[arrayIndex] = this.state.estadosPosibles[i + 1];
        } else {
          nuevoEstado[arrayIndex] = this.state.estadosPosibles[0];
        }
      }
    }
    this.setState({ estadosCeldas: nuevoEstado });
  };

  render() {
    let grillas = [];
    for (let i = 0; i < this.state.numGrillas; ++i) {
      grillas.push(i);
    }

    return (
      <div className={classes.layout}>
        {grillas.map(index => {
          return (
            <Grilla
              key={index}
              numFilas={this.state.numFilas}
              numColumnas={this.state.numColumnas}
              handleClick={this.handleClick}
              handleGetValue={this.handleGetValue}
              getArrayIndex={this.getArrayIndex}
            />
          );
        })}
      </div>
    );
  }
}

export default Layout;
