import React from 'react';
import s from './Main.module.scss';
import styleContainer from '../common/styles/container.module.scss'
import image from "../../src/assets/image/ava/photo_2023-04-01_15-39-39.jpg";
import {Link} from "react-scroll";
import {TypeAnimation} from "react-type-animation";


export const Main = () => {
    return (
        <div id={'main'} className={s.mainBlock}>
            <div className={styleContainer.container}>
                <div className={s.mainText}>
                    <span className={s.title}>Hello there...</span>
                    <h1 className={s.name}>I'm Nikita Zakutaev </h1>
                    <h2 className={s.profession}>
                        <TypeAnimation
                            sequence={[
                                'Front - End Developer', 4000,
                                'Front - End ', 300,
                                'Front -', 300,
                                '', 3000,
                            ]}
                            repeat={Infinity}
                            speed={1}
                        />
                    </h2>

                    <p className={s.text}>I'm frontend developer with experience in creating SPA using React,
                        Redux,redux-Toolkit,Axios,
                        React-Router-Dom, TypeScript, JavaScript, SCSS, HTML. Usualy i prefer to spend my leisure
                        time
                        on improving my English, studying new technologies and solve tasks on Codewars. Ready to
                        consider
                        project work and full-time employment.
                    </p>
                    <div className={s.btnBar}>
                        <Link to={'projects'}
                              className={s.work}
                              activeClass={s.active}
                              spy={true}
                              smooth={true}
                              offset={-40}
                              duration={500}
                        >MY WORK</Link>
                    </div>
                </div>
                <div className={s.image}>
                    <div style={{backgroundImage: `url(${image})`}} className={s.photo}></div>
                </div>
            </div>
        </div>
    );
};

