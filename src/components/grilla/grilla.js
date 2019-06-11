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
      {filas.map(() => {
          return <div className={classes.fila}>
              {columnas.map(() => {
                  return <Celda/>
              })}
          </div>
      })}
    </div>
  );
};

export default Grilla;
