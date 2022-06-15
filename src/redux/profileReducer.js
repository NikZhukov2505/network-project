import { profileAPI } from "../api/api"

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

const initialState = {
    posts: [
        {
            id: 1,
            message: 'Hi, how are you?',
            likesCount: 15,
        },
        {
            id: 2,
            message: "It's my first post",
            likesCount: 5,
        },
        {
            id: 3,
            message: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit corrupti reprehenderit pariatur autem repellendus, id necessitatibus accusamus, voluptas laborum ex sequi repudiandae, quas vitae ullam. Ipsam ab ad provident voluptates?',
            likesCount: 150,
        },

    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let text = action.newPostText
            return {
                ...state,
                posts: [...state.posts, {
                    id: state.posts.length + 1,
                    message: text,
                    likesCount: 0,
                }]
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })


export const getUserPage = (id) => (dispatch) => {
    profileAPI.getUserProfile(id)
        .then(data => {
            dispatch(setUserProfile(data))
        })
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response))
    })
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(data => {
        if (data.resultcode == 0) {
            dispatch(setStatus(status))
        }
    })
}


export default profileReducer;