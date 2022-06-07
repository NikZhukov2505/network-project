import { profileAPI } from "../api/api"

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

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
    newPostText: 'Some Text...',
    profile: null,

}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let text = state.newPostText
            if (text === '' || text === ' ') {
                alert('Text')
                return state
            }
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, {
                    id: state.posts.length + 1,
                    message: text,
                    likesCount: 0,
                }]
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newTextPost,
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state;
    }
}


export const addPostActionCreator = () => ({ type: ADD_POST })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const postChangeActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newTextPost: text
    }
}

export const getUserPage = (id) => (dispatch) => {
    profileAPI.getUserProfile(id)
        .then(data => {
            dispatch(setUserProfile(data))
        })
}


export default profileReducer;