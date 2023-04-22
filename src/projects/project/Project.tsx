import React from 'react';
import s from './Project.module.css';

type ProjectType = {
    image?: string
    title: string
    description: string
}
export const Project: React.FC<ProjectType> = ({title, description, image}) => {
    return (
        <div className={s.project}>
            <div className={s.imageContainer}>
                <a href="">Смотреть</a>
            </div>
            <h4 >{title}</h4>
            <span className={s.description}>{description}</span>
        </div>
    );
};

