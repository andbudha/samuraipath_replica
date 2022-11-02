import React from 'react';
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <>
            <div className={classes.content}>
                <div>
                    <img src="https://wallpapercave.com/wp/wp2822939.jpg" alt="city-image"/>
                </div>
                <div>
                    avatar+description
                </div>
                <MyPosts/>
            </div>
        </>
    );
};

export default Profile;