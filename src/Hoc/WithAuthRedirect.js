import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
})

const WithAuthRedirect = (Component) => {

    const RedirectComponent = (props) => {
        const { userId } = useParams();
        if (!props.isAuth) return <Navigate to={'/login'} />
        return <Component {...props} userId={userId} />
    }

    let connectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return connectedAuthRedirectComponent;
};

export default WithAuthRedirect;