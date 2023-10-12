import React from 'react';
import s from './Projects.module.scss';
import styleContainer from '../common/styles/container.module.scss'
import {Project} from "./project/Project";
import {Title} from "../common/components/Title";
import soc from '../assets/image/projects/connection-networking-interconnection-link-bond.jpg'
import todo from '../assets/image/projects/flat-lay-notebook-with-to-do-list-on-desk.jpg'


export const Projects = () => {
    const social={
        backgroundImage:`url(${soc})`
    }
    const todolist={
        backgroundImage:`url(${todo})`
    }

    return (
        <div id={'projects'} className={s.projectsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
           <Title title={'MY PROJECTS'}/>
                <div className={s.projects}>
                    <Project href={'https://github.com/nikizak34/samurai-way-main'} style={social} title={'Social Network'} description={'SPA created with React JS library,' +
                        ' Redux for state management, TypeScript for scalability'}  />
                    <Project  style={todolist} title={'TODO List'} description={'Application build with ReactJS/Redux/TypeScript and  Material UI.'} />



                </div>
            </div>
        </div>
    );
};

