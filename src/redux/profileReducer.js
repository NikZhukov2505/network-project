import { profileAPI } from "../api/api"

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'

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
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id != action.postId)
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const deletePost = (postId) => ({ type: DELETE_POST, postId })


export const getUserPage = (id) => async (dispatch) => {
    const response = await profileAPI.getUserProfile(id)
    dispatch(setUserProfile(response))
}

export const getStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response))
}

export const updateStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status)
    if (response.resultcode === 0) {
        dispatch(setStatus(status))
    }
}


export default profileReducer;