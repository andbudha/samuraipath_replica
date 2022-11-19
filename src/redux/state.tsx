import {rerenderEntireTree} from "../render";

export type MessageType = {
    id: number
    message: string
}

export type DialogueType = {
    id: number
    name: string
}

export type PostType = {
    id: number
    message: string
    likes: number
}

type MessagePageType = {
    dialogues: Array<DialogueType>
    messages: Array<MessageType>
}

type ProfilePageType = {
    posts: Array<PostType>
}

export type RootStateType = {
    profilePage: ProfilePageType
    messagePage: MessagePageType
}



let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you doing?', likes: 15 },
            {id: 2, message: 'It is my very first post!', likes: 25 }
        ]
    },
    messagePage: {
        dialogues: [
            {id: 1, name: 'Andrei'},
            {id: 2, name: 'Delia'},
            {id: 3, name: 'Natalia'},
            {id: 4, name: 'Dorian'}
        ],
        messages: [
            {id: 1, message: 'Hi there...'},
            {id: 2, message: 'How is your it-kamasutra?'},
            {id: 3, message: 'What\'s up?'},
            {id: 4, message: 'Hi there again'}
        ]
    }
}

export const addPost = (postMessage: string) => {
  const newPost = {id: 2, message: postMessage, likes: 33 }
    state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
}

export  default state;
