import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//post data
export type PostsType = {
    posts: Array<PostType>
}

type PostType = {
    id: number
    message: string
    likes: number
}

let posts = [
    {id: 1, message: 'Hi, how are you doing?', likes: 15 },
    {id: 2, message: 'It is my very first post!', likes: 25 }
]


//dialogue data
export type DialoguesType = {
    dialogues: Array<DialogueType>
}

type DialogueType = {
    id: number
    name: string
}

let dialogues = [
    {id: 1, name: 'Andrei'},
    {id: 2, name: 'Delia'},
    {id: 3, name: 'Natalia'},
    {id: 4, name: 'Dorian'}
]

//message data
export type MessagesType = {
    messages: Array<MessageType>
}

type MessageType = {
    id: number
    message: string
}


let messages = [
    {id: 1, message: 'Hi there...'},
    {id: 2, message: 'How is your it-kamasutra?'},
    {id: 3, message: 'What\'s up?'},
    {id: 4, message: 'Hi there again'}
]

ReactDOM.render(
    <App
        posts={posts}
        dialogues={dialogues}
        messages={messages}
    />,
  document.getElementById('root')
);