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


let dialoguesData = [
    {id: 1, name: 'Andrei'},
    {id: 2, name: 'Delia'},
    {id: 3, name: 'Natalia'},
    {id: 4, name: 'Dorian'}
]

let messageData = [
    {id: 1, message: 'Hi there...'},
    {id: 2, message: 'How is your it-kamasutra?'},
    {id: 3, message: 'What\'s up?'},
    {id: 4, message: 'Hi there again'}
]
//main component
const Dialogues = () => {
    return (
        <div className={classes.dialogues}>
            <div className={classes.dialogue_items}>
                <DialogueItem name={dialoguesData[0].name} id={dialoguesData[0].id}/>
                <DialogueItem name={dialoguesData[1].name} id={dialoguesData[1].id}/>
                <DialogueItem name={dialoguesData[2].name} id={dialoguesData[2].id}/>
                <DialogueItem name={dialoguesData[3].name} id={dialoguesData[3].id}/>
            </div>
            <div className={classes.messages}>
                <Message message={messageData[0].message} id={messageData[0].id}/>
                <Message message={messageData[1].message} id={messageData[1].id}/>
                <Message message={messageData[2].message} id={messageData[2].id}/>
                <Message message={messageData[3].message} id={messageData[3].id}/>
            </div>
        </div>
    );
};

export default Dialogues;