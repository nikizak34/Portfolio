import React from 'react';
import style from "../../FormGroup/FormGroupItem/FormGroupItem.module.scss";

type Props = {
    placeholder: string
}
export const FormGroupItem = ({placeholder}: Props) => {
    return (
        <div className={style.colMd}>
            <input className={style.formControl} type="text" name='name'
                   placeholder={placeholder}/>
            <span className={style.line}></span>
        </div>
    );
};

