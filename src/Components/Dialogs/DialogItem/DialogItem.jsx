import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './../Dialogs.module.css'



const DialogItem = (p) => {
    return (
        <div className={styles.dialog + ' ' + styles.active}>
            <NavLink to={'/dialogs/' + p.id}>{p.name}</NavLink>
        </div>
    );
};

export default DialogItem;