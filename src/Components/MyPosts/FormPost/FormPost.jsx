import React from 'react';
import { useFormik } from 'formik';
import styles from '../MyPosts.module.css'



const FormPost = (p) => {
    const validate = values => {
        const errors = {};
        if (!values.newPostText || values.newPostText == " ") {
            errors.newPostText = 'Required'
        } else if (values.newPostText.length > 50) {
            errors.newPostText = 'Max Length is 50 symbols';
        }
        return errors
    }

    const formik = useFormik({
        initialValues: {
            newPostText: '',
        },
        validate,
        onSubmit: values => {
            p.onAddPost(values.newPostText);
            values.newPostText = '';
        },
    })
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <textarea
                    id='newPostText'
                    name='newPostText'
                    placeholder='Enter your Post'
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    className={`${styles.text_message} ${formik.touched.newPostText && formik.errors.newPostText ? styles.redForm : null}`}
                    cols="50" rows="10"
                    value={formik.values.newPostText} />
                {formik.touched.newPostText && formik.errors.newPostText ? <div style={{ color: 'red' }}>{formik.errors.newPostText}</div> : null}
                <div><button type='submit'>Add post</button></div>
            </form>
            <div>

            </div>
        </div>

    );
};

export default FormPost;