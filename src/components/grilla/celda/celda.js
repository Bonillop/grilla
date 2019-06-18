import React from "react";
import classes from "./celda.module.css";

const Celda = (props) => (

    <div className={classes.celda} onClick={() => props.handleClick(props.arrayIndex)}> 
        {props.getValue(props.arrayIndex)}
    </div>
)

export default Celda;