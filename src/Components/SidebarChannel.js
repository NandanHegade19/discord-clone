import React from 'react';
import { useDispatch } from 'react-redux';
import { setChannelInfo } from '../features/channelSlice';
import '../Styles/SidebarChannel.css';


function SidebarChannel({id, channelName}) {

    const dispatch = useDispatch();

    return (
        <div className = "sidebarchannel" 
            onClick = {() => dispatch(setChannelInfo({
                channelId: id,
                channelName: channelName
            }))}
        >
            <h4><span className = "hash">#</span> {channelName}</h4>
        </div>
    )
}

export default SidebarChannel;
