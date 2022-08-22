import React from 'react';
import styles from './ProfileInfo.module.css'
import avatar from '../../../images/avatarjpg.jpg'
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from '../../ProfileStatus/ProfileStatusWiithHooks';

const ProfileInfo = ({ profile, status, updateStatus }) => {
    if (!profile) {
        return <Preloader />
    }
    return (
        <div>
            <div className={styles.description_block}>
                <img className={styles.user_photo} src={profile.photos.large !== null ? profile.photos.large : avatar} alt="profile.photos.large" />
                <h1>{profile.fullName}</h1>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
                <p>Поиск работы: {profile.lookingForAJob != false ? 'В поиске' : 'Пока не в поиске'}</p>
                <p>About me: {profile.aboutMe != null ? profile.aboutMe : 'Пользователь еще ничего о себе не рассказал'}</p>
            </div>
        </div>
    );
};

export default ProfileInfo;