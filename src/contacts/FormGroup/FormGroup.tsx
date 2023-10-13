import React from 'react';
import s from "../FormGroup/FormGroup.module.scss";
import style from "../FormGroup/FormGroupItem/FormGroupItem.module.scss";
import {Fade} from "react-awesome-reveal";
import {FormGroupItem} from "./FormGroupItem/FormGroupItem";

export const FormGroup = () => {
    return (
        <div className={s.column}>
            <div className={s.contactForm}>
                <h4 className={s.title}>SAY SOMETHING</h4>
                <Fade cascade direction={"left"}>
                    <form className={s.rowForm}>
                        <div className={s.formGroup}>
                            <FormGroupItem placeholder={'Name *'}/>
                        </div>
                        <div className={s.formGroup}>
                            <FormGroupItem placeholder={'Email *'}/>
                        </div>
                        <div className={s.formGroup2}>
                            <FormGroupItem placeholder={'Subject *'}/>
                        </div>
                        <div className={s.formGroup3}>
                            <div className={style.colMd}>
                                        <textarea
                                            className={style.formControl}
                                            name='name'
                                            placeholder={'Your message *'}/>
                                <span className={style.line}></span>
                            </div>
                        </div>
                        <div className={s.formGroup3}>
                            <button type={'submit'} className={s.mBtn}>SEND MESSAGE</button>
                        </div>
                    </form>
                </Fade>
            </div>
        </div>
    );
};

