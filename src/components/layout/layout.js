import React, {Component} from "react";
import Grilla from '../grilla/grilla';
import classes from './layout.module.css';

class Layout extends Component {

    render() {
        return (
            <div className={classes.layout}>
                <Grilla></Grilla>
                <Grilla></Grilla>
            </div>
        )
    }
}

export default Layout;
