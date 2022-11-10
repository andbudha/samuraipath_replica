import React from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {PostsType} from "../../../index";


const MyPosts = (props: PostsType) => {

    let postElements = props.posts
        .map(p=><Post message={p.message} likes={p.likes}/>);


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
                {postElements}
            </div>
        </div>
    );
};

export default MyPosts;