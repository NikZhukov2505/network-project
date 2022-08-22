import React from 'react';
import styles from './Users.module.css'
import Paginator from '../common/Paginator/Paginator';
import User from './User';

const Users = ({ totalUsersCount, pageSize, onPageChanged, currentPage, users, followingInProgress, unfollow, follow }) => {
    return (
        <div className={styles.user_wrapper}>
            <Paginator totalItemsCount={totalUsersCount}
                pageSize={pageSize}
                onPageChanged={onPageChanged}
                currentPage={currentPage}
            />
            {
                users.map(u => <User user={u}
                    followingInProgress={followingInProgress}
                    unfollow={unfollow}
                    follow={follow}
                    key={u.id} />)
            }
        </div>
    );
};

export default Users;