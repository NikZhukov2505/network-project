import React from 'react';
import { useFormik } from 'formik'
import { validate } from './../../utils/validators/validate';
import styles from '../Login/Login.module.css'
import { login } from '../../redux/auth-reducer';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Form = ({ dispatch }) => {
    const navigate = useNavigate()
    const loginId = useSelector(state => state.auth.id)
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate,
        onSubmit: (values, submitProps) => {
            dispatch(login(values, submitProps.setStatus))
            submitProps.resetForm()
            if (!loginId) {
                navigate(`/`)
            }
        },
    })

    return (

        <form onSubmit={formik.handleSubmit} className={styles.login_form}>
            <div className={styles.login_card1}>
                <input id='email' autoComplete='username' name='email' type="text" placeholder='Email'
                    className={`${styles.inputs} ${formik.touched.email && formik.errors.email ? styles.inputs_error : ''}`}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.email} />
                {formik.touched.email && formik.errors.email ? <div className={styles.errorForm1}>{formik.errors.email}</div> : null}
            </div>
            <div className={styles.login_card2}>
                <input id='password' autoComplete='current-password' name='password' type="password" placeholder='Password'
                    className={`${styles.inputs} ${formik.touched.password && formik.errors.password ? styles.inputs_error : ''}`}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.password} />
                {formik.touched.password && formik.errors.password ? <div className={styles.errorForm2}>{formik.errors.password}</div> : null}
            </div>
            {formik.status != undefined ? <div className={styles.errorForm3}>{formik.status.error}</div> : null}
            <div><input className={styles.rememberMe} id='rememberMe' name='rememberMe' type="checkbox"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.rememberMe} /> <span className={styles.remeber_text}>Remember me</span></div>
            <div><button className={styles.login_btn} type='submit'>Login</button></div>
        </form>

    );
};

export default Form;