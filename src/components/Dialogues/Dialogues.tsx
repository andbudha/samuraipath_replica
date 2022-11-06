import React from 'react';
import classes from "./Dialogues.module.css";
import {NavLink} from "react-router-dom";

//subcomponents
type DialogueItemPropsType = {
    id: number
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
    id: number
}
const Message: React.FC<MessagePropsType> = (props) => {
    return(
        <div className={classes.message}>{props.message}</div>
    );
}


let dialogueData = [
    {id: 1, name: 'Andrei'},
    {id: 2, name: 'Delia'},
    {id: 3, name: 'Natalia'},
    {id: 4, name: 'Dorian'}
]

let dialogueElements = dialogueData
    .map(d => <DialogueItem name={d.name} id={d.id}/>
    );


let messageData = [
    {id: 1, message: 'Hi there...'},
    {id: 2, message: 'How is your it-kamasutra?'},
    {id: 3, message: 'What\'s up?'},
    {id: 4, message: 'Hi there again'}
]

let messageElements = messageData
    .map(m=> <Message message={m.message} id={m.id}/>)
//main component
const Dialogues = () => {
    return (
        <div className={classes.dialogues}>
            <div className={classes.dialogue_items}>
                {dialogueElements}
            </div>
            <div className={classes.messages}>
                {messageElements}
            </div>
        </div>
    );
};

export default Dialogues;