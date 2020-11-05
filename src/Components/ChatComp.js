import React, { useEffect, useState } from 'react';
import '../Styles/ChatComp.css';
import ChatHeaderComp from './ChatHeaderComp';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import MessageComp from './MessageComp';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { selectChannelId, selectChannelName } from '../features/channelSlice';
import db from '../firebase';
import firebase from 'firebase';


function ChatComp() {
    
    const user = useSelector(selectUser);
    const channelId = useSelector(selectChannelId);
    const channelName = useSelector(selectChannelName);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if(channelId){
            db.collection('channels').doc(channelId).collection('messages').orderBy('timestamp','desc')
            .onSnapshot(snapshot => setMessages(snapshot.docs.map((doc) => doc.data())));
        }
        
    }, [channelId])

    const sendMessage = (e) => {
        e.preventDefault();
        db.collection('channels').doc(channelId).collection('messages')
        .add({
            message: input,
            user: user,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput('');
    }
    return (
        <div className = "chatcomp">
            <ChatHeaderComp channelName = {channelName}/>
            <div className = "messages">
                {messages.map((message) => (
                    <MessageComp message = {message.message} timestamp = {message.timestamp} user = {message.user}/>
                ))}
            </div>
            <div className = "input">
                <AddCircleIcon fontSize = "large"/>
                <form>
                    <input type = "text" value = {input} onChange = {e => setInput(e.target.value)}
                    disables = {!channelId} placeholder = {`Mesasge #${channelName}`}/>
                    <button className = "sendbutton" onClick={sendMessage} type = "submit">Send message</button>
                </form>
                <div className = "inputIcons">
                    <CardGiftcardIcon/>
                    <GifIcon/>
                    <EmojiEmotionsIcon/>
                </div>
            </div>
        </div>
    )
}

export default ChatComp;
