import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogues from "./components/Dialogues/Dialogues";
import {BrowserRouter, Route} from "react-router-dom";
import {PostsType} from "./index";
import {DialoguesType} from "./index";
import {MessagesType} from "./index";

function App(props: PostsType & DialoguesType & MessagesType) {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/profile'} render={()=><Profile posts={props.posts}/>}/>
                    <Route path={'/dialogues'} render={()=><Dialogues
                        dialogues={props.dialogues}
                        messages={props.messages}
                    />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
