import React from 'react';
import classes from './Item.module.css';
import {updateInputStatus} from '../../../state';

const Item = (props) => {
    const inputElement = React.createRef();

    const onInputChange = () => {
        let input = inputElement.current;

        props.dispatch(updateInputStatus(input.id, input.checked, input.name));
    };

    return (
        <label className={classes.label}>
            {props.value}
            <input
                type='radio'
                name={props.name}
                className={classes.input}
                id={props.id.toString()}
                value={props.value}
                checked={props.status}
                onChange={onInputChange}
                ref={inputElement}
            />
        </label>
    );
};

export default Item;
