import React from 'react';
import classes from './Start-game.module.css';
import {NavLink} from 'react-router-dom';

const StartGame = (props) => {
    let arrElement = props.Main.FieldSize.filter(item => (item.STATUS));

    return (
        <NavLink to={arrElement[0].ROUTE} className={classes.navLink}>
            Начать игру!
        </NavLink>
    );
};

export default StartGame;
