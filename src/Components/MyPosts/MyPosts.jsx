import React from 'react';
import styles from './MyPosts.module.css'
import Post from './Post/Post';


const MyPosts = (p) => {
    const postsElements = p.posts.map(p => <Post message={p.message} likes={p.likesCount} key={p.id} />)

    let newPostElement = React.createRef()

    const onPostChange = () => {
        let text = newPostElement.current.value
        p.updateNewPostText(text)

    }

    const onAddPost = () => {
        p.addPost()
    }

    return (
        <div className={styles.posts_block}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                        className={styles.text_message}
                        ref={newPostElement} cols="50" rows="10"
                        value={p.newPostText} />
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div >
            <div className={styles.posts}>
                {postsElements}
            </div>

        </div >
    );
};

export default MyPosts;