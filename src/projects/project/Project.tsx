import React from 'react';
import s from './Project.module.scss';

type ProjectType = {
    image?: string
    title: string
    description: string
    style?:any
}
export const Project: React.FC<ProjectType> = ({title, description, style}) => {
    return (
        <div className={s.project} >
            <div  className={s.imageContainer} style={style}>
                <a href="">Смотреть</a>
            </div>
            <div className={s.des}>
                <h4 className={s.designation} >{title}</h4>
                <span className={s.description}>{description}</span>
            </div>

        </div>
    );
};

