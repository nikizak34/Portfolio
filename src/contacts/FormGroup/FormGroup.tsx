import React from 'react';
import s from "../FormGroup/FormGroup.module.scss";
import style from "../FormGroup/FormGroupItem/FormGroupItem.module.scss";
import {Fade} from "react-awesome-reveal";
import {FormGroupItem} from "./FormGroupItem/FormGroupItem";
import {SubmitHandler, useForm} from "react-hook-form";
import emailjs from '@emailjs/browser';


type FormValues = {
    name: string
    email: string
    message: string
}
export const FormGroup = () => {
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<FormValues>({mode: "onChange"})

    const sendEmail: SubmitHandler<FormValues> = (data, event) => {
        event?.preventDefault()
        emailjs.sendForm('service_dqrksm5', 'template_d3nkh1o', event?.target, 'W6duJf4emA0AGH6j0')
        event?.target.reset()
    }

    return (
        <div className={s.column}>
            <div className={s.contactForm}>
                <h4 className={s.title}>SAY SOMETHING</h4>
                <Fade cascade direction={"left"}>
                    <form onSubmit={handleSubmit(sendEmail)} className={s.rowForm}>
                        <div className={s.formGroup}>
                            <FormGroupItem errors={errors.name} register={{
                                ...register('name', {
                                    required: 'Name is required',
                                    maxLength: {
                                        value: 100, message: 'The field Name must be a' +
                                            ' string or array type with a maximum length of \'100\''
                                    },
                                })
                            }} placeholder={'Name *'}/>
                            {errors.name && <div className={s.error}>{errors.name?.message}</div>}
                        </div>
                        <div className={s.formGroup}>
                            <FormGroupItem errors={errors.email} register={{
                                ...register('email', {
                                    required: 'Email is required',
                                    pattern: {value: emailRegex, message: 'Invalid email'},
                                })
                            }} placeholder={'Email *'}/>
                            {errors.email && <div className={s.error}>{errors.email?.message}</div>}
                        </div>
                        <div className={s.formGroup3}>
                            <div className={style.colMd}>
                                        <textarea
                                            {...register('message', {
                                                required: 'Message is required',
                                                maxLength: {
                                                    value: 100, message: 'The field Message must be a' +
                                                        ' string or array type with a maximum length of \'100\''
                                                },
                                            })}
                                            className={errors.message ? style.lineError : style.formControl}
                                            placeholder={'Your message *'}/>
                                {errors.message && <div style={{color: 'red'}}>{errors.message?.message}</div>}
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

const emailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/
