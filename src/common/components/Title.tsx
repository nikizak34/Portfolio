import React from 'react';
import s from "../../skills/Skills.module.scss";


type PropsTitleType={
    title:string
}

export const Title = (props:PropsTitleType) => {
    return (
        <h2 className={s.title}>{props.title}</h2>
    );
};


