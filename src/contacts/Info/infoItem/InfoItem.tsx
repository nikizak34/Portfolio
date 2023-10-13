import React from 'react';
import s from "../../Info/infoItem/InfoItem.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";


type Props={
    icon:IconDefinition
    text:string
    topicText:string
}
export const InfoItem = ({icon,text,topicText}:Props) => {
    return (
        <div className={s.info}>
            <div className={s.icon}>
                <FontAwesomeIcon icon={icon}/>
            </div>
            <div className={s.mediaBody}>
                <h6 className={s.topic}>{topicText}</h6>
                <p className={s.text}>{text}</p>
            </div>
        </div>
    );
};

