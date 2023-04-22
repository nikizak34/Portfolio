import React from 'react';
import s from './Skills.module.css';
import styleContainer from '../common/styles/container.module.css'
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill description={'lorem kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk'} title={'Js'}/>
                    <Skill description={'welkfnipejqopjfopqejopfjqeop'} title={'Css'}/>
                    <Skill description={'eljnfqhnfioqhjfiqjwfipjfipqjpfijqpfjp'} title={'React'}/>
                </div>
            </div>
        </div>
    );
};

