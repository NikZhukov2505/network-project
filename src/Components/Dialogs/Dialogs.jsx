import AOS from 'aos';
import 'aos/dist/aos.css';
import React from 'react';
import { Navigate } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import styles from './Dialogs.module.css'
import Message from './Message/Message';

AOS.init()



const Dialogs = (p) => {
    const state = p.dialogsPage

    const dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />)
    const messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} />)


    const onAddMessage = () => {
        p.addMessage()
    }
    const onMessageChange = (e) => {
        p.updateNewMessage(e.target.value)
    }
    return (
        <div data-aos-duration='1200' data-aos="fade-right" className={styles.dialogs}>
            <div className={styles.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}
            </div>
            <div className={styles.text__block}>
                <textarea onChange={(e) => onMessageChange(e)}
                    className={styles.addtext}
                    value={state.newMessageText} />
                <button onClick={onAddMessage}>Add Message</button>
            </div>

        </div>
    );
};

export default Dialogs;