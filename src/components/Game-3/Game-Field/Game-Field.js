import React from 'react';
import classes from './Game-Field.module.css';
import Cell from './Cell/Cell';

const GameField = (props) => {
    const renderCells = props.Cells.map(cell => <Cell
    key={cell.ID}
    number={cell.NUMBER}
    status={cell.STATUS}
    />);

    return (
        <div className={classes.gameField}>
            {renderCells}
        </div>
    );
};

export default GameField;