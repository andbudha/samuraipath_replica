import React from 'react';
import classes from "./Dialogues.module.css";
import DialogueItem from "./DialogueItem/DialogueItem";
import Message from "./Message/Message";
import {DialogueType, MessageType} from "../../redux/state";

type DialoguesPropsType = {
    dialogues: Array<DialogueType>
    messages: Array<MessageType>
}

const Dialogues = (props: DialoguesPropsType) => {

    let dialogueElements = props.dialogues
        .map(d => <DialogueItem name={d.name} id={d.id}/>
        );

    let messageElements = props.messages
        .map(m=> <Message message={m.message} id={m.id}/>)

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