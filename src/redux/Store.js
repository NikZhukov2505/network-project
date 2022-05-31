import dialogsReducer from "./dialogsReducer"
import profileReducer from "./profileReducer"
// import sidebarReducer from "./sidebarReducer"



let store = {
    _state: {
        profilePage: {
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
            newPostText: 'Some Text...'

        },
        dialogsPage: {
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
            ],
            newMessageText: 'Some Text...'
        },
    },
    getState() {
        return this._state
    },

    subscribe(observer) {
        this._callSubscriber = observer       // observer // puslisher subscriber ---- pattern
    },
    _callSubscriber() {
        console.log('State changed');
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        // sidebarReducer()
        this._callSubscriber(this._state)
    }

}




export default store
window.store = store