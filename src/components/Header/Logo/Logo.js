import React from 'react';
import classes from './Logo.module.css';

const Logo = () => {
    return (
        <div>
            <img src='/img/xo-icon-png' className={classes.logo} width='50' height='50' alt='Логотип'/>
        </div>
    );

};

export default Logo;