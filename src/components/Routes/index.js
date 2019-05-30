import PropTypes from "prop-types";
import React, {Component} from "react";
import {BackHandler} from "react-native";
import {Router, Scene} from "react-native-router-flux";

import  Home  from "../../screens/Language/containers";
import  About  from "../../screens/UserName/containers";
import ForgotPasswordContainer from "../../screens/ForgotPassword/containers"
import Login from "../../screens/Login/templates";

const propTypes = {
    isLoggedin: PropTypes.bool
};

const defaultProps = {
    isLoggedin: false
};

export default class Routes extends Component {

    handleBackButton() {
        BackHandler.exitApp();
        return true;
    }

    render() {
        const {isLoggedin} = this.props;
        return (
            <Router {...this.props}  backAndroidHandler={this.handleBackButton.bind(this)}>
                <Scene  hideNavBar={true} initial={true}>
                        <Scene key="forgotPassword" component={ForgotPasswordContainer} title="Forgot Password" />
                        <Scene key = "login" component = {Login} title = "Login" />
                        <Scene key = "home" component = {Home} title = "Home" />
                        <Scene key = "about" component = {About} title = "About" />
                </Scene>
            </Router>
        );
    }
}

Routes.defaultProps = defaultProps;

Routes.propTypes = propTypes;
