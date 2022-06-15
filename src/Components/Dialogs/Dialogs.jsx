import AOS from 'aos';
import 'aos/dist/aos.css';
import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import styles from './Dialogs.module.css'
import FormMessage from './FormMessage/FormMessage';
import Message from './Message/Message';

AOS.init()



const Dialogs = (p) => {
    const state = p.dialogsPage

    const dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />)
    const messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} />)

    const onAddMessage = (newMessageText) => {
        p.addMessage(newMessageText)
    }

    return (
        <div data-aos-duration='1200' data-aos="fade-right" className={styles.dialogs}>
            <div className={styles.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}
            </div>
            <FormMessage onAddMessage={onAddMessage} />

        </div>
    );
};

export default Dialogs;