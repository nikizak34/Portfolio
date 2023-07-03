import React from 'react';
import s from './Contacts.module.scss';
import {Title} from "../common/components/Title";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import {faLocationDot} from '@fortawesome/free-solid-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
export const Contacts = () => {
    return (
        <div className={s.contacts}>
            <div className={s.container}>
                <Title title={'GET IN TOUCH'}/>
                <div className={s.row}>
                    <div className={s.column}>
                        <div className={s.contactForm}>
                            <h4 className={s.title}>SAY SOMETHING</h4>
                            <form className={s.rowForm}>
                                <div className={s.formGroup}>
                                    <div className={s.colMd}>
                                        <input className={s.formControl} type="text" name='name'
                                               placeholder={'Name *'}/>
                                        <span className={s.line}></span>
                                    </div>
                                </div>
                                <div className={s.formGroup}>
                                    <div className={s.colMd}>
                                        <input className={s.formControl} type="text" name='name'
                                               placeholder={'Email *'}/>
                                        <span className={s.line}></span>
                                    </div>
                                </div>
                                <div className={s.formGroup2}>
                                    <div className={s.colMd}>
                                        <input className={s.formControl} type="text" name='name'
                                               placeholder={'Subject *'}/>
                                        <span className={s.line}></span>
                                    </div>
                                </div>
                                <div className={s.formGroup3}>
                                    <div className={s.colMd}>
                                        <textarea className={s.formControl} name='name'
                                                  placeholder={'Your message *'}/>
                                        <span className={s.line}></span>
                                    </div>
                                </div>
                                <div className={s.formGroup3}>
                                    <button className={s.mBtn}>SEND MESSAGE</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className={s.column2}>
                        <div className={s.info}>
                            <div className={s.icon}>
                                <FontAwesomeIcon icon={faLocationDot}/>
                            </div>
                            <div className={s.mediaBody}>
                                <h6 className={s.topic}>Our Address</h6>
                                <p className={s.text}>Kazan, Russia</p>
                            </div>
                        </div>

                        <div className={s.info}>
                            <div className={s.icon}>
                                <FontAwesomeIcon icon={faPhone}/>
                            </div>
                            <div className={s.mediaBody}>
                                <h6 className={s.topic}>Our Phone</h6>
                                <p className={s.text}>+79050269718</p>
                            </div>
                        </div>

                        <div className={s.info}>
                            <div className={s.icon}>
                                <FontAwesomeIcon icon={faEnvelope}/>
                            </div>
                            <div className={s.mediaBody}>
                                <h6 className={s.topic}>Our Email</h6>
                                <p className={s.text}>nikita2000.16.11@gmail.com</p>
                            </div>
                        </div>

                    </div>
                </div>
                {/*<form className={s.form}>*/}
                {/*    <input type="text"/>*/}
                {/*    <input type="text"/>*/}
                {/*    <textarea className={s.afa} ></textarea>*/}
                {/*</form>*/}
                {/*<button type={'submit'} className={s.button}>Send</button>*/}
            </div>
        </div>
    );
};

