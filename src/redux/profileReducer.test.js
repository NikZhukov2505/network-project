import profileReducer, { addPostActionCreator, deletePost } from './profileReducer';

const state = {
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
}

it('length of posts should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator('it-kamasutra.com')
    // 2.action
    let newState = profileReducer(state, action)
    // 3. expectation
    expect(newState.posts.length).toBe(4)
})
it('message of new post should be correct', () => {
    let action = addPostActionCreator('it-kamasutra.com')
    let newState = profileReducer(state, action)
    expect(newState.posts[3].message).toBe('it-kamasutra.com')
})

it('length of after deleting length of messages should be decrement', () => {
    let action = deletePost(1)
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(2)
})

it(`after deleting length shouldn't be decrement if id is incorrect`, () => {
    let action = deletePost(1000)
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(3)
})