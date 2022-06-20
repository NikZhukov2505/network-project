import { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { logout } from './../../redux/auth-reducer';



class HeaderContainer extends Component {
    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isFetching: state.auth.isFetching,
    login: state.auth.login,
    isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, {
    logout,
})(HeaderContainer);