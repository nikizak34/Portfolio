import React from 'react';
import s from './Projects.module.css';
import styleContainer from '../common/styles/container.module.css'
import {Project} from "./project/Project";


export const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Projects</h2>
                <div className={s.projects}>
                    <Project title={'social network'} description={'dsfffffffffffffff'} />
                    <Project title={'todolist'} description={'dsggggggggggg'} />
                    <Project title={'todolist'} description={'dsggggggggggg'} />

                </div>
            </div>
        </div>
    );
};

