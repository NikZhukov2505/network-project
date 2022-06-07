import { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { getAuthUserData } from './../../redux/auth-reducer';



class HeaderContainer extends Component {

    componentDidMount() {
        this.props.getAuthUserData()
    }
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
    getAuthUserData,
})(HeaderContainer);