import React from 'react';
import '../Styles/ChatHeaderComp.css';
import NotificationsIcon from '@material-ui/icons/Notifications';
import EditLocationIcon from '@material-ui/icons/EditLocation';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';


function ChatHeaderComp({channelName}) {

    return (
        <div className = "chatheader">
            <div className = "chatheaderLeft">
                <h3><span className = "headerhash">#</span>{channelName}</h3>
            </div>
            <div className = "chatheaderRight">
                <NotificationsIcon/>
                <EditLocationIcon/>
                <PeopleAltIcon/>
                <div className = "search">
                    <input type = "text" placeholder = "Search"/>
                    <SearchRoundedIcon/>
                </div>
                <SendRoundedIcon/>
                <HelpRoundedIcon/>
            </div>
        </div>
    )
}

export default ChatHeaderComp;
