import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profileReducer'
import Profile from './Profile';

class ProfileContainer extends Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/24144`)
            .then(response => {
                this.props.setUserProfile(response.data)
                console.log(this.props);
            })
    }
    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        );
    }
};

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);