import React, { Component } from "react";
import Grilla from "../grilla/grilla";
import classes from "./layout.module.css";

class Layout extends Component {
  state = {
    numGrillas: 1,
    numFilas: 8,
    numColumnas: 8
  };

  render() {
    let grillas = [];
    for (let i = 0; i < this.state.numGrillas; ++i) {
      grillas.push(i);
    }

    return (
      <div className={classes.layout}>
        {grillas.map(() => {
          return (
            <Grilla
              numFilas={this.state.numFilas}
              numColumnas={this.state.numColumnas}
            />
          );
        })}
      </div>
    );
  }
}

export default Layout;
