import React from 'react';
import s from './Contacts.module.css';


export const Contacts = () => {
    return (
        <div className={s.contacts}>
            <div className={s.container}>
                <h5 className={s.title}>Contacts</h5>
                <form className={s.form}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea className={s.afa} ></textarea>
                </form>
                <button className={s.button}>Send</button>
            </div>
        </div>
    );
};

