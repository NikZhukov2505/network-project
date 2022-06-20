import React from 'react';
import Form from '../Form/Form';
import styles from './Login.module.css'
import { useDispatch } from 'react-redux';

const Login = () => {
    const dispatch = useDispatch()
    return (
        <div className={styles.login_block}>
            <h1>Login</h1>
            <Form dispatch={dispatch} />
        </div>
    );
};

export default Login;