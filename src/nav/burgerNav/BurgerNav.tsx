import s from "../burgerNav/BurgerNav.module.scss";
import {Link} from "react-scroll";
import React, {useState} from "react";

export const BurgerNav = () => {
    const [menuIsOpen,setMenuIsOpen]=useState(false)
    const onBurgerBtnClick=()=>{
       setMenuIsOpen(!menuIsOpen)
    }

    return (
        <div className={s.burgerNav}>
            <div className={menuIsOpen?`${s.show} ${s.burgerNavItems}`:s.burgerNavItems}>
                <Link to={'main'}
                      activeClass={s.active}
                      spy={true}
                      smooth={true}
                      offset={-170}
                      duration={500}
                >Main</Link>
                <Link to={'skills'}
                      activeClass={s.active}
                      spy={true}
                      smooth={true}
                      offset={-40}
                      duration={500}
                >Skills</Link>
                <Link to={'projects'}
                      activeClass={s.active}
                      spy={true}
                      smooth={true}
                      offset={-40}
                      duration={500}
                >Projects</Link>
                <Link to={'contacts'}
                      activeClass={s.active}
                      spy={true}
                      smooth={true}
                      offset={-40}
                      duration={500}
                >Contacts</Link>
            </div>
            <div onClick={onBurgerBtnClick} className={s.burgerBtn}>
                    <span className={s.line}></span>
                    <span className={s.line}></span>
                    <span className={s.line}></span>
            </div>

        </div>

    );
};