import React from 'react';
import styles from './Users.module.css'
import avatar from '../../images/avatarjpg.jpg'
import { NavLink } from 'react-router-dom';

const User = ({ user, followingInProgress, unfollow, follow }) => {
    return (
        <div className={styles.users_card} key={user.id}>
            <span className={styles.avatar_block}>
                <div>
                    <NavLink to={'/profile/' + user.id}><img className={styles.user_avatar} src={user.photos.small !== null
                        ? user.photos.small : avatar} alt="Avatar" /></NavLink>
                </div>
                <div className={styles.btns}>
                    {
                        user.followed ?
                            <button disabled={followingInProgress.some(id => id === user.id)}
                                onClick={() => { unfollow(user.id) }}>Unfollow</button>
                            :
                            <button disabled={followingInProgress.some(id => id === user.id)}
                                onClick={() => { follow(user.id) }}>Follow</button>
                    }
                </div>
            </span>
            <span className={styles.user_desc}>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{'user.location.country'}</div>
                    <div>{'user.location.city'}</div>
                </span>
            </span>
        </div>

    );
};

export default User;