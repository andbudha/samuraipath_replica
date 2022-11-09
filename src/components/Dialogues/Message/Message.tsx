import React from 'react';
import classes from "../Dialogues.module.css";

type MessagePropsType = {
    message: string
    id: number
}
const Message: React.FC<MessagePropsType> = (props) => {
    return(
        <div className={classes.message}>{props.message}</div>
    );
}
export default Message;