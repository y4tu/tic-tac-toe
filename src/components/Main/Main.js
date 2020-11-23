import React from 'react';
import classes from './Main.module.css';
import FirstStep from './First-step/First-step';
import FieldSize from './Field-size/Field-size';
import StartGame from './StartGame/Start-game';

const Main = (props) => {
    return (
        <form className={classes.settings}>
            <FirstStep
                FirstStep={props.Main.FirstStep}
                dispatch={props.dispatch}
            />
            <FieldSize
                FieldSize={props.Main.FieldSize}
                dispatch={props.dispatch}
            />
            <StartGame
                Main={props.Main}
                dispatch={props.dispatch}
            />
        </form>
    );
};

export default Main;