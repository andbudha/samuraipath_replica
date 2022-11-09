import React from 'react';
import classes from "./Post.module.css";

type PostPropsType={
    message: string
    likes: number
}

const Post: React.FC<PostPropsType> = (props) => {
    return (
        <div className={classes.item}>
            <img src="https://banner2.cleanpng.com/20180904/vji/kisspng-avatar-image-computer-icons-likengo-usertesting-index-5b8ec1242fdcf5.6000571015360822121961.jpg" alt="avatar-image"/>
            Post One
            <p>{props.message}</p>
            <div>
                <span>likes: {props.likes}</span>
            </div>
        </div>
    );
};

export default Post;