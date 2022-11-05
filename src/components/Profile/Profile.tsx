import React from 'react';
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

type ProfilePropsType = {
    message: string
}


const Profile: React.FC<ProfilePropsType>=(props) => {
    return (
        <>
            <div className={classes.content}>
                <div>
                    <img src="https://wallpapercave.com/wp/wp2822939.jpg" alt="city-image"/>
                </div>
                <div>
                    avatar+description
                    <br/>
                    {props.message}
                    <br/>
                </div>
                <MyPosts/>
            </div>
        </>
    );
};

export default Profile;