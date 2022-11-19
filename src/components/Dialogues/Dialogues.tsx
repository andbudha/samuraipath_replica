import React from 'react';
import classes from "./Dialogues.module.css";
import DialogueItem from "./DialogueItem/DialogueItem";
import Message from "./Message/Message";
import {RootStateType} from "../../redux/state";

type DialoguesPropsType = {
    state: RootStateType
}

const Dialogues = (props: DialoguesPropsType) => {

    let dialogueElements = props.state.messagePage.dialogues
        .map(d => <DialogueItem name={d.name} id={d.id}/>
        );

    let messageElements = props.state.messagePage.messages
        .map(m=> <Message message={m.message} id={m.id}/>)

    return (
        <div className={classes.dialogues}>
            <div className={classes.messages}>
                {messageElements}
            </div>
            <div className={classes.dialogue_items}>
                {dialogueElements}
            </div>
        </div>
    );
};

export default Dialogues;