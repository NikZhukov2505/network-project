import * as axios from 'axios';
import React from 'react';
import styles from './Users.module.css'
import avatar from '../../images/avatarjpg.jpg'

const Users = (p) => {
    const getUsers = () => {
        if (p.users.length === 0) {

            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    p.setUsers(response.data.items)
                })
        }
    }



    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
            {
                p.users.map(u => (
                    <div className={styles.users_card} key={u.id}>
                        <span className={styles.avatar_block}>
                            <div>
                                <img className={styles.user_avatar} src={u.photos.small !== null ? u.photos.small : avatar} alt="Avatar" />
                            </div>
                            <div className={styles.btns}>
                                {
                                    u.followed ?
                                        <button onClick={() => p.unfollow(u.id)}>Unfollow</button>
                                        : <button onClick={() => p.follow(u.id)}>Follow</button>
                                }
                            </div>
                        </span>
                        <span className={styles.user_desc}>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{'u.location.country'}</div>
                                <div>{'u.location.city'}</div>
                            </span>
                        </span>
                    </div>
                ))
            }
        </div>
    );
};

export default Users;