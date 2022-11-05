import React from 'react';
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://wallpapercave.com/wp/wp2822939.jpg" alt="city-image"/>
            </div>
            <div className={classes.descriptionBlock}>
                avatar+description
            </div>
        </div>
    );
};

export default ProfileInfo;