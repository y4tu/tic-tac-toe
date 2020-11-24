import React from 'react';
import classes from './Game-3.module.css';
import GameField from './Game-Field/Game-Field';

const Game3 = (props) => {
    const getRandomArrayElement = (array) => array[Math.floor(Math.random() * array.length)];

    const currentState = props.state.Main.FirstStep.filter(item => item.NAME);
    
    currentState[0].NAME === 'ai' ? getRandomArrayElement(props.state.Page3.Cells)

    return (
        <div className={classes.game}>
            <h2 className={classes.title}>3x3</h2>
            <GameField Cells={props.Page3.Cells}/>
        </div>
    );
};

export default Game3;