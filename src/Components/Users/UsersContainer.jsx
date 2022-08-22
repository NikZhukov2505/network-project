import { connect } from 'react-redux';
import { follow, setCurrentPage, unfollow, getUsers } from '../../redux/usersReducer';
import React from 'react';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import WithAuthRedirect from '../../Hoc/WithAuthRedirect';
import { compose } from 'redux';
import { getPageSize, getUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress, getUsersSelector } from '../../redux/users-selectors';


class UsersContainer extends React.Component {

    componentDidMount() {
        const { currentPage, pageSize } = this.props
        this.props.getUsers(currentPage, pageSize)
    }

    onPageChanged = (pageNumber) => {
        const { pageSize } = this.props
        this.props.getUsers(pageNumber, pageSize)
    }



    render() {

        return (
            <>
                {this.props.isFetching
                    ? <Preloader />
                    : <Users totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        onPageChanged={this.onPageChanged}
                        currentPage={this.props.currentPage}
                        users={this.props.users}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
                        followingInProgress={this.props.followingInProgress}
                    />}

            </>

        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress,
//     }
// }

const mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default compose(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        getUsers,
    }),
    WithAuthRedirect
)(UsersContainer)