import React from 'react';
import s from './Header.module.scss';
import {Nav} from "../nav/Nav";
import {BurgerNav} from "../nav/burgerNav/BurgerNav";

export const Header = () => {
    return (
        <div className={s.header}>
            <Nav/>
            <BurgerNav/>
        </div>
    );
};

