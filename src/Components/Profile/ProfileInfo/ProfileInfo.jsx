import React from 'react';
import styles from './ProfileInfo.module.css'
import tesla from './../../../images/tesla.jpg'
import avatar from '../../../images/avatarjpg.jpg'
import Preloader from '../../common/Preloader/Preloader';

const ProfileInfo = (p) => {
    if (!p.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div className={styles.photo}>
                <img src={tesla} alt="" />
            </div>
            <div className={styles.description_block}>
                <img className={styles.user_photo} src={p.profile.photos.large !== null ? p.profile.photos.large : avatar} alt="profile.photos.large" />
                <h1>{p.profile.fullName}</h1>
            </div>
        </div>
    );
};

export default ProfileInfo;