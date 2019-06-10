import React from "react";
import classes from "./grilla.module.css";
import Celda from "./celda/celda";

const Grilla = (props) => (

    <div className={classes.grilla}>
        Grilla
        <Celda></Celda>
    </div>
)

export default Grilla;