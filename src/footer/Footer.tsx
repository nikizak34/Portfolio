import React from 'react';
import s from './Footer.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faTelegram} from "@fortawesome/free-brands-svg-icons/faTelegram";
import cod from '../assets/image/footer/brand-codewars-svgrepo-com.svg'


export const Footer = () => {

    return (
        <div id={'footer'} className={s.footer}>
            <div className={s.container}>
                <div className={s.title}>Nikita Zakutaev</div>
                <div className={s.iconBlock}>
                    <a href={'https://www.codewars.com/users/nikizak34'}>
                        <img src={cod} className={s.fotImage} alt="error"/>
                    </a>

                    <a href={'https://t.me/Gddjson'} className={s.icon}>
                        <FontAwesomeIcon icon={faTelegram} style={{color: "rgba(255, 255, 255, 0.5)",}}/>
                    </a>

                    <a href={'https://github.com/nikizak34'} className={s.icon}>
                        <FontAwesomeIcon icon={faGithub} style={{color: "rgba(255, 255, 255, 0.5)",}}/>
                    </a>
                </div>
                <p>© 2023 copyright all right reserved</p>
            </div>
        </div>
    );
};

