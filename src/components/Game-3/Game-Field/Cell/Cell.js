import React from 'react';
import classes from './Cell.module.css';

const Cell = (props) => {
    return (
        <div className={props.status ? `${classes.cell} ${classes.cross}` : classes.cell}>123</div>
    );
};

export default Cell;
