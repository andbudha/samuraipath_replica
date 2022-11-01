import React from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My Posts
            <div>
                <textarea></textarea>
                <button>Add Post</button>
            </div>
            <div className={classes.posts}>
                <Post message={'Hi, how are you doing?'} likes={15}/>
                <Post message={'It is my very first post!'} likes={25}/>
            </div>
        </div>
    );
};

export default MyPosts;