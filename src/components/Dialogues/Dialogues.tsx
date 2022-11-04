import React from 'react';
import classes from "./Dialogues.module.css";
import {NavLink} from "react-router-dom";

const Dialogues = () => {
    return (
        <div className={classes.dialogues}>
            <div className={classes.dialogue_items}>
                <div className={`${classes.dialogue} ${classes.active}`}>
                    <NavLink to='/dialogues/1'>Andrei</NavLink>
                </div>
                <div className={classes.dialogue}>
                    <NavLink to='/dialogues/2'>Delia</NavLink>
                </div>
                <div className={classes.dialogue}>
                    <NavLink to='/dialogues/3'>Natalia</NavLink>
                </div>
                <div className={classes.dialogue}>
                    <NavLink to='/dialogues/4'>Dorian</NavLink>
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hi there...</div>
                <div className={classes.message}>How is your it-kamasutra?</div>
                <div className={classes.message}>What's up?</div>
            </div>
        </div>
    );
};

export default Dialogues;