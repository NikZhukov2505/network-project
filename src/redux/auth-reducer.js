import { authAPI } from './../api/api';

const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

const initialState = {
    id: null,
    login: null,
    email: null,
    isFetching: false,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state;
    }
}

export const setAuthUserData = (id, login, email, isAuth) => ({ type: SET_USER_DATA, payload: { id, login, email, isAuth } })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })

export const getAuthUserData = () => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    const response = await authAPI.authMe()
    if (response.resultCode === 0) {
        let { id, login, email } = response.data;
        dispatch(setAuthUserData(id, login, email, true))
    }

}

export const login = (values, setStatus) => async (dispatch) => {
    const response = await authAPI.login(values)
    if (response.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        setStatus({ error: response.messages[0] })
    }
}

export const logout = () => async (dispatch) => {
    const response = await authAPI.logout()
    if (response.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }

}
export default authReducer;