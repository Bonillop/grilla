import React from "react";
import classes from "./grilla.module.css";
import Celda from "./celda/celda";

const Grilla = props => {
  let filas = [];
  for (let i = 0; i < props.numFilas; ++i) {
    filas.push(i);
  }
  let columnas = [];
  for (let i = 0; i < props.numColumnas; ++i) {
    columnas.push(i);
  }

  return (
    <div className={classes.grilla}>
      {filas.map(indexFilas => {
        return (
          <div key={indexFilas} className={classes.fila}>
            {columnas.map(index => {
              return (
                <Celda
                  key={index}
                  handleClick={props.handleClick}
                  arrayIndex={props.getArrayIndex(indexFilas, index)}
                  getValue={props.handleGetValue}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Grilla;
