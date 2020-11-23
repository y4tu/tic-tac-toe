import React from 'react';
import Logo from './Logo/Logo';
import classes from './Header.module.css';
import Title from './Title/Title';

const Header = () => {
    return (
        <div className={classes.header}>
        <Logo/>
        <Title/>
    </div>
    );
};

export default Header;