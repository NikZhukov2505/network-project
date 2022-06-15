import React from 'react';
import Form from '../Form/Form';
import styles from './Login.module.css'

const Login = () => {
    return (
        <div className={styles.login_block}>
            <h1>Login</h1>
            <Form />
        </div>
    );
};

export default Login;