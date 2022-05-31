import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Profile.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './../MyPosts/MyPostsContainer';


AOS.init()

const Profile = (props) => {
    return (
        <div data-aos-duration='1400' data-aos="fade-up">
            <div>
                <ProfileInfo profile={props.profile} />
                <MyPostsContainer />
            </div>
        </div>
    );
};

export default Profile;