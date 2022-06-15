import React from 'react';
import { useFormik } from 'formik'
import { validate } from './../../utils/validators/validate';
import styles from '../Login/Login.module.css'

const Form = () => {

    const formik = useFormik({
        initialValues: {
            login: '',
            password: '',
            rememberMe: false
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            values.login = ''
            values.password = ''
        },
    })
    return (

        <form onSubmit={formik.handleSubmit} className={styles.login_form}>
            <div className={styles.login_card1}>
                <input id='login' autoComplete='username' name='login' type="text" placeholder='Login'
                    className={`${styles.inputs} ${formik.touched.login && formik.errors.login ? styles.inputs_error : ''}`}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.firstName} />
                {formik.touched.login && formik.errors.login ? <div className={styles.errorForm1}>{formik.errors.login}</div> : null}
            </div>
            <div className={styles.login_card2}>
                <input id='password' autoComplete='current-password' name='password' type="password" placeholder='Password'
                    className={`${styles.inputs} ${formik.touched.password && formik.errors.password ? styles.inputs_error : ''}`}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.firstName} />
                {formik.touched.password && formik.errors.password ? <div className={styles.errorForm2}>{formik.errors.password}</div> : null}
            </div>
            <div><input className={styles.rememberMe} id='rememberMe' name='rememberMe' type="checkbox"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.firstName} /> <span className={styles.remeber_text}>Remember me</span></div>
            <div><button className={styles.login_btn} type='submit'>Login</button></div>
        </form>

    );
};

export default Form;