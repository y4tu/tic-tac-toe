import React from 'react';
import classes from './Game-3.module.css';
import GameField from './Game-Field/Game-Field';

const Game3 = (props) => {

    return (
        <div className={classes.game}>
            <h2 className={classes.title}>3x3</h2>
            <GameField Cells={props.Page3.Cells}/>
        </div>
    );
};

export default Game3;