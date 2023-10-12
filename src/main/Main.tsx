import React from 'react';
import s from './Main.module.scss';
import styleContainer from '../common/styles/container.module.scss'
import image from "../../src/assets/image/ava/photo_2023-04-01_15-39-39.jpg";
import {Fade} from "react-awesome-reveal";
import ReactTypingEffect from "react-typing-effect";
import {Link} from "react-scroll";


export const Main = () => {
    return (
        <div id={'main'} className={s.mainBlock}>
            <Fade cascade direction={"down"}>
            <div className={styleContainer.container}>
                    <div className={s.mainText}>
                        <span className={s.title}>Hello there...</span>
                        <h1 className={s.name}>I'm Nikita Zakutaev </h1>
                        <h2 className={s.profession}>
                            <ReactTypingEffect
                                speed={150}
                                typingDelay={500}
                                text={'Front - End Developer '}
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
                            <div className={s.here} >CV</div>
                        </div>
                    </div>
                <div className={s.image}>
                    <div style={{backgroundImage: `url(${image})`}} className={s.photo}></div>
                </div>
            </div>
            </Fade>
        </div>
    );
};

