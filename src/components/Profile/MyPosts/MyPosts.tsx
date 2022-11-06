import React from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

    let postData = [
        {message: 'Hi, how are you doing?', likes: 15 },
        {message: 'It is my very first post!', likes: 25 }
    ]
    return (
        <div className={classes.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={classes.posts}>
                <Post message={postData[0].message} likes={postData[0].likes}/>
                <Post message={postData[1].message} likes={postData[1].likes}/>
            </div>
        </div>
    );
};

export default MyPosts;