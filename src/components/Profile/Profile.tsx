import React from 'react';
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <>
            <div className={classes.content}>
                <div>
                    <img src="https://pixabay.com/get/g186956ebf29b496956d0d89ea43b71dd0cf37bb555340faa3aba68ba7674aa529b0d52513174cd42d85e4c7294c62d5d1514ee5369094d44a2c4ae21127eb9464139eb763bbe1348bd197aae3bd8b845_1920.jpg" alt="desert image"/>
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