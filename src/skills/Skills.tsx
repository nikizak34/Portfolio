import React from 'react';
import s from './Skills.module.scss';
import styleContainer from '../common/styles/container.module.scss'
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/Title";
import react from '../assets/image/technology/react-svgrepo-com.svg'
import redux from '../assets/image/technology/redux-svgrepo-com.svg'
import javascript from '../assets/image/technology/javascript-155-svgrepo-com.svg'
import typescript from '../assets/image/technology/typescript-svgrepo-com.svg'
import github from '../assets/image/technology/github-142-svgrepo-com.svg'
import html from '../assets/image/technology/html5-01-svgrepo-com.svg'
import sass from '../assets/image/technology/sass-svgrepo-com.svg'
import material from '../assets/image/technology/material-ui-svgrepo-com.svg'


export const Skills = () => {

    return (
        <div id={'skills'} className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <Title title={'MY SKILLS'}/>
                <div className={s.skills}>
                    <Skill description={'Used React library for developing UI of SPA. Experienced in creating ' +
                        'functional' +
                        ' components with' +
                        ' Hooks as well as class components.' +
                        ' Used HOC to reuse component logic and optimize performance' +
                        ' with React.memo.'} title={'React'} tech={react}/>
                    <Skill description={'Implemented Redux for state management of app as BLL. Created reducers for ' +
                        'immutable state modification, and used Thunk middleware for asynchronous' +
                        ' network requests.'} title={'Redux'} tech={redux}/>
                    <Skill description={'Experienced in using ES6 features, such as Promises, Classes, Destructuring' +
                        ' assignment, Arrow functions etc.'} tech={javascript} title={'JavaScript'}/>
                    <Skill description={'Used TypeScript for developing easily scalable and' +
                        ' sustainable application.'} tech={typescript} title={'TypeScript'}/>
                    <Skill description={'GitHub is an international web service for hosting IT projects and their joint' +
                        ' development. The web service is based on the Git version control' +
                        ' system'} tech={github} title={'GitHub'}/>
                    <Skill description={'Created styles for UI components by using Styled Components and Sass' +
                        ' preprocessor.'} tech={html} title={'HTML/CSS'}/>
                    <Skill description={'Sass is the most mature, stable, and powerful professional' +
                        ' grade CSS extension' +
                        ' language in the world.'} tech={sass} title={'SaSS/SCSS'}/>
                    <Skill description={'Used Material UI for app development with styles ' +
                        'and design out of a box.'} tech={material} title={'Material UI'}/>
                </div>
            </div>
        </div>
    );
};

