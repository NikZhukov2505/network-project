import React from 'react';
import styles from './../Dialogs.module.css'

const Message = (p) => {
    return (
        <div className={styles.message}>{p.message}</div>
    );
};

export default Message;