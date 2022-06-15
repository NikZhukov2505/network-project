const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE'
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'


const initialState = {
    messages: [
        {
            id: 1,
            message: 'Hi'
        },
        {
            id: 2,
            message: 'How is your it-kamasutra?'
        },
        {
            id: 3,
            message: 'YO'
        },
        {
            id: 4,
            message: 'Yo'
        },
        {
            id: 5,
            message: 'YO'
        },
    ],
    dialogs: [
        {
            id: 1,
            name: 'Nikita'
        },
        {
            id: 2,
            name: 'Andrew'
        },
        {
            id: 3,
            name: 'Sveta'
        },
        {
            id: 4,
            name: 'Anna'
        },
        {
            id: 5,
            name: 'Darya'
        },
        {
            id: 6,
            name: 'Bob'
        },
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE: {
            let text = action.newMessageText
            if (text === '' || text === ' ') {
                alert('Введите текст')
                return state
            }
            return {
                ...state,
                messages: [...state.messages, { id: state.messages.length + 1, message: text }]
            }
        }
        default:
            return state;
    }

}

export const addMessageActionCreator = (newMessageText) => ({ type: ADD_NEW_MESSAGE, newMessageText })


export default dialogsReducer;