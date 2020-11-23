import React from 'react';
import classes from './First-step.module.css';
import Item from '../Item/Item';

const FirstStep = (props) => {
    const renderItems = props.FirstStep.map(item =>
        <Item
            key={item.ID.toString()}
            id={item.ID}
            name={item.GROUP_NAME}
            value={item.NAME}
            status={item.STATUS}
            dispatch={props.dispatch}
        />);

    return (
        <fieldset className={classes.firstStep}>
            <legend className={classes.legend}>Первый ход за:</legend>
            {renderItems}
        </fieldset>
    );
};

export default FirstStep;