import { Avatar } from '@material-ui/core';
import React from 'react';
import '../Styles/MessageComp.css';


function MessageComp({message, user, timestamp}) {
    return (
        <div className = "messagecomp">
            <Avatar src={user.photoURL} />
            <div className = "messageInfo">
                <h4>{user.displayName}
                    <span className = "timestamp">{new Date(timestamp?.toDate()).toUTCString()}  </span>
                </h4>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default MessageComp;
