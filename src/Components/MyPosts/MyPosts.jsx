import React from 'react';
import FormPost from './FormPost/FormPost';
import styles from './MyPosts.module.css'
import Post from './Post/Post';


const MyPosts = (props) => {

    const postsElements = [...props.posts].reverse().map(p => <Post message={p.message} likes={p.likesCount} key={p.id} />)

    const onAddPost = (newPostText) => {
        props.addPost(newPostText)
    }
    return (
        <div className={styles.posts_block} >
            <h3>My post</h3>
            <FormPost onAddPost={onAddPost} />
            <div className={styles.posts}>
                {postsElements}
            </div>

        </div >
    );
};

export default React.memo(MyPosts);