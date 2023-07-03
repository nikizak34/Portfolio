import React from 'react';
import s from './Skill.module.scss';


type SkillType = {
    title: string
    description: string
    tech?:string
}

export const Skill: React.FC<SkillType> = ({
                                               title,
                                               tech,
                                               description

                                           }) => {
    return (
        <div className={s.skill}>
            <img className={s.re} src={tech} alt="svg"/>
            <h3 className={s.titleTechnology}>{title}</h3>
            <p className={s.description}>{description}</p>

        </div>
    );
};

