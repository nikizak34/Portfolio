import React from 'react';
import s from "../Info/Info.module.scss";
import {faEnvelope, faLocationDot, faPhone} from "@fortawesome/free-solid-svg-icons";
import {InfoItem} from "./infoItem/InfoItem";

export const Info = () => {
    return (
        <div className={s.column2}>
            <InfoItem icon={faLocationDot} text={'Kazan, Russia'} topicText={'Our Address'}/>

            <InfoItem icon={faPhone} text={'+79050269718'} topicText={'Our Phone'}/>

            <InfoItem icon={faEnvelope} text={'nikita2000.16.11@gmail.com'} topicText={'Our Email'}/>
        </div>
    );
};

