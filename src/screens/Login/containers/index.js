import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native'
import Login from '../templates';
import {navigateTo} from "../../../utils/utility";

class LoginContainer extends Component {

onForgotPassword = () =>{
    navigateTo("forgotPassword")
}
onForgotUserName = () =>{
    navigateTo("forgotUsername")
}


    render(){
            return(
            <Login 
                onForgotPassword={this.onForgotPassword}
                onForgotUserName={this.onForgotUserName}/>
        )
    }
}


export default LoginContainer;