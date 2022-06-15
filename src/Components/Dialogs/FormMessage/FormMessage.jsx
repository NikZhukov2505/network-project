import React from 'react';
import { useFormik } from 'formik';
import styles from '../Dialogs.module.css'

const FormMessage = (p) => {
    const validate = values => {
        const errors = {};
        if (!values.newMessageText || values.newMessageText == " ") {
            errors.newMessageText = 'Вы не ввели текст'
        } else if (values.newMessageText.length > 100) {
            errors.newMessageText = 'Max Length is 100 symbols';
        }
        return errors
    }
    const formik = useFormik({
        initialValues: {
            newMessageText: '',
        },
        validate,
        onSubmit: values => {
            p.onAddMessage(values.newMessageText)
            values.newMessageText = ''
        },
    })
    return (
        <div className={styles.form_block}>

            <form onSubmit={formik.handleSubmit} className={styles.text__block}>
                <textarea id='newMessageText' name='newMessageText' placeholder='Enter your message'
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    className={`${styles.addtext} ${formik.touched.newMessageText && formik.errors.newMessageText ? styles.redForm : ''}`}
                    value={formik.values.newMessageText} />
                <button type='submit'>Add Message</button>
                {formik.touched.newMessageText && formik.errors.newMessageText ? <div className={styles.errorInfo}>{formik.errors.newMessageText}</div> : null}
            </form>
        </div>

    );
};

export default FormMessage;