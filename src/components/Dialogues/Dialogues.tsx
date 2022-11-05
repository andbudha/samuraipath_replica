import React from 'react';
import classes from "./Dialogues.module.css";
import {NavLink} from "react-router-dom";

//subcomponents
type DialogueItemPropsType = {
    id: string
    name: string
}
const DialogueItem: React.FC<DialogueItemPropsType> =(props)=> {
    let path = '/dialogues/' + props.id;
    return(
        <div className={`${classes.dialogue} ${classes.active}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}


type MessagePropsType = {
    message: string
}
const Message: React.FC<MessagePropsType> = (props) => {
    return(
        <div className={classes.message}>{props.message}</div>
    );
}

//main component
const Dialogues = () => {
    return (
        <div className={classes.dialogues}>
            <div className={classes.dialogue_items}>
                <DialogueItem name={'Andrei'} id={'1'}/>
                <DialogueItem name={'Delia'} id={'2'}/>
                <DialogueItem name={'Natalia'} id={'3'}/>
                <DialogueItem name={'Dorian'} id={'4'}/>
            </div>
            <div className={classes.messages}>
                <Message message={'Hi there...'}/>
                <Message message={'How is your it-kamasutra?'}/>
                <Message message={'What\'s up?'}/>
            </div>
        </div>
    );
};

export default Dialogues;