import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import WithAuthRedirect from '../../Hoc/WithAuthRedirect';
import { getUserPage, getStatus, updateStatus } from '../../redux/profileReducer';
import Profile from './Profile';



class ProfileContainer extends Component {
    componentDidMount() {
        let userId = this.props.userId
        if (!userId) {
            userId = this.props.authorisedUserId;
        }
        this.props.getUserPage(userId)
        this.props.getStatus(userId)
    }
    render() {

        return (

            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
        );
    }
};

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorisedUserId: state.auth.id,
    isAuth: state.auth.isAuth
})

export default compose(
    connect(mapStateToProps, { getUserPage, getStatus, updateStatus }),
    WithAuthRedirect
)(ProfileContainer)