import React from 'react';
import s from './Project.module.scss';

type ProjectType = {
    image?: string
    title: string
    description: string
    style?:any
    href?:string
}
export const Project: React.FC<ProjectType> = ({title, description, style,href}) => {
    return (
        <div className={s.project} >
            <div  className={s.imageContainer} style={style}>
                <a href={href}>View</a>
            </div>
            <div className={s.des}>
                <h4 className={s.designation} >{title}</h4>
                <span className={s.description}>{description}</span>
            </div>

        </div>
    );
};

