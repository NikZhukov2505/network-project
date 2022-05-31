import React from 'react';
import styles from './Post.module.css'
import avatar from '../../../images/avatarjpg.jpg'

const Post = (props) => {
    return (
        <div className={styles.item}>
            <div className={styles.post__item}>
                <img className={styles.avatar} src={avatar} alt="avatar" />
                <p>{props.message}</p>
            </div>
            <div className={styles.likes}>
                <span>{`Like ${props.likes}`}</span>
            </div>
        </div>
    );
};

export default Post;