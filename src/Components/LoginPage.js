import { Button } from '@material-ui/core';
import React from 'react';
import '../Styles/LoginPage.css';
import {auth, provider} from '../firebase';


function LoginPage() {

    const signIn = () => {
        //google auth
        auth.signInWithPopup(provider).catch((err) => alert(err.message));
    }
    return (
        <div className = "loginpage">
            <div className = "logo">
                <img src = "https://www.freepnglogos.com/uploads/discord-logo-png/discord-branding-2.png" alt = "discord logo"/>
            </div>
            <Button onClick = {signIn}>Sign In</Button>
        </div>
    )
}

export default LoginPage;
