import React from 'react';
import style from "../../FormGroup/FormGroupItem/FormGroupItem.module.scss";
import {UseFormRegisterReturn} from "react-hook-form";


interface  Props  {
    placeholder: string
    register: UseFormRegisterReturn
    errors:any
}

export const FormGroupItem = ({placeholder,register,errors}: Props) => {
    return (
        <div className={style.colMd}>
            <input {...register} className={errors?style.lineError:style.formControl} type="text"
                   placeholder={placeholder}/>
            {/*<span className={errors?style.lineError:style.line}></span>*/}
        </div>
    );
};

