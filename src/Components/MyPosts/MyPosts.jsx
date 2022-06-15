import React from 'react';
import FormPost from './FormPost/FormPost';
import styles from './MyPosts.module.css'
import Post from './Post/Post';


const MyPosts = (p) => {
    const postsElements = p.posts.map(p => <Post message={p.message} likes={p.likesCount} key={p.id} />)

    const onAddPost = (newPostText) => {
        p.addPost(newPostText)
    }

    return (
        <div className={styles.posts_block}>
            <h3>My post</h3>
            <FormPost onAddPost={onAddPost} />
            <div className={styles.posts}>
                {postsElements}
            </div>

        </div >
    );
};

export default MyPosts;