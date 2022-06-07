import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import WithAuthRedirect from '../../Hoc/WithAuthRedirect';
import { getUserPage } from '../../redux/profileReducer';
import Profile from './Profile';


class ProfileContainer extends Component {
    componentDidMount() {
        let userId = this.props.userId
        if (!userId) {
            userId = 24144
        }
        this.props.getUserPage(userId)
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

export default compose(
    connect(mapStateToProps, { getUserPage }),
    WithAuthRedirect
)(ProfileContainer)