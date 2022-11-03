import React from 'react';
import classes from "./Dialogues.module.css";

const Dialogues = () => {
    return (
        <div className={classes.dialogues}>
            <div className={classes.dialogue_items}>
                <div className={`${classes.dialogue} ${classes.active}`}>
                    Andrei
                </div>
                <div className={classes.dialogue}>
                    Delia
                </div>
                <div className={classes.dialogue}>
                    Natalia
                </div>
                <div className={classes.dialogue}>
                    Dorian
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