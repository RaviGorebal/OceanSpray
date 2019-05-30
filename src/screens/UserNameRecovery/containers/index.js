import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native'
import UserNameRecovery from '../templates';
import {navigateTo} from "../../../utils/utility";

class UserNameRecoveryContainer extends Component {

onForgotPassword = () =>{
    navigateTo("forgotPassword")
}


    render(){
            return(<UserNameRecovery 
                onForgotPassword={this.onForgotPassword}/>)
    }
}


export default UserNameRecoveryContainer;