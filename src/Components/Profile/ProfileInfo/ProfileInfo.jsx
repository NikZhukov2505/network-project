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
                <p>Поиск работы: {p.profile.lookingForAJob != false ? 'В поиске' : 'Пока не в поиске'}</p>
                <p>About me: {p.profile.aboutMe != null ? p.profile.aboutMe : 'Пользователь еще ничего о себе не рассказал'}</p>
            </div>
        </div>
    );
};

export default ProfileInfo;