import React from 'react';
import s from './Footer.module.css';



export const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.container}>
                <div className={s.title}>Nikita Zakutaev</div>
                <div className={s.iconBlock}>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                </div>
                <p>2023 Все права защищены</p>
            </div>
        </div>
    );
};

