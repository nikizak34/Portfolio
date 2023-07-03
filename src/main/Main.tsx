import React from 'react';
import s from './Main.module.scss';
import styleContainer from '../common/styles/container.module.css'
import image from "../../src/assets/image/ava/photo_2023-04-01_15-39-39.jpg";


export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={styleContainer.container}>
                <div className={s.mainText}>
                    <span className={s.title}>Hello there...</span>
                    <h1 className={s.name}>I'm Nikita Zakutaev </h1>
                    <h2 className={s.profession}>Front - End Developer </h2>
                    <p className={s.text}>I'm frontend developer with experience in creating SPA using React,
                        Redux,redux-Toolkit,Axios,
                        React-Router-Dom, TypeScript, JavaScript, SCSS, HTML. Usualy i prefer to spend my leisure time
                        on improving my English, studying new technologies and solve tasks on Codewars. Ready to
                        consider
                        project work and full-time employment.
                    </p>
                    <div className={s.btnBar}>
                        <a className={s.work} href="">MY WORK</a>
                        <a className={s.here} href="">CV</a>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${image})`}} className={s.photo}></div>
            </div>
        </div>
    );
};

