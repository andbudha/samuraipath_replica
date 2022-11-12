import React from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {PostType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: Array<PostType>
}

const MyPosts = (props: MyPostsPropsType) => {

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