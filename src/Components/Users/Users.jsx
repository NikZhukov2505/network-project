import React from 'react';
import styles from './Users.module.css'
import avatar from '../../images/avatarjpg.jpg'
import { NavLink } from 'react-router-dom';

const Users = (p) => {
    const pagesCount = Math.ceil(p.totalUsersCount / p.pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)

    }
    return (
        <div className={styles.user_wrapper}>
            <div className={styles.btns__wrapper}>
                {
                    pages.map((el, i) => (
                        <button key={i + 1} onClick={() => p.onPageChanged(el)} className={p.currentPage === el && styles.selectedPage}>{el}</button>
                    ))
                }
            </div>
            {
                p.users.map(u => (
                    <div className={styles.users_card} key={u.id}>
                        <span className={styles.avatar_block}>
                            <div>
                                <NavLink to={'/profile/' + u.id}><img className={styles.user_avatar} src={u.photos.small !== null
                                    ? u.photos.small : avatar} alt="Avatar" /></NavLink>
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