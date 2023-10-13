import React from 'react';
import s from './Contacts.module.scss';
import {Title} from "../common/components/Title";
import {FormGroup} from "./FormGroup/FormGroup";
import {Info} from "./Info/Info";

export const Contacts = () => {

    return (
        <div id={'contacts'} className={s.contacts}>
            <div className={s.container}>
                <Title title={'GET IN TOUCH'}/>
                <div className={s.row}>
                    <FormGroup/>
                    <Info/>
                </div>
            </div>
        </div>
    );
};

