import React from 'react';
import classes from './Field-size.module.css';
import Item from '../Item/Item';

const FieldSize = (props) => {
    const renderItems = props.FieldSize.map(item =>
        <Item
            key={item.ID.toString()}
            id={item.ID}
            name={item.GROUP_NAME}
            value={item.NAME}
            status={item.STATUS}
            dispatch={props.dispatch}
        />);

    return (
        <fieldset className={classes.fieldSize}>
            <legend className={classes.legend}>Размер поля:</legend>
            {renderItems}
        </fieldset>
    );
};

export default FieldSize;
