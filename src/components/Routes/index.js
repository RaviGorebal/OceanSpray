import PropTypes from "prop-types";
import React, {Component} from "react";
import {BackHandler} from "react-native";
import {Router, Scene} from "react-native-router-flux";

import  LanguageContainer  from "../../screens/Language/containers";
import  About  from "../../screens/UserName/containers";
import LoginContainer from '../../screens/Login/containers';
import ForgotPasswordContainer from "../../screens/ForgotPassword/containers"
import ForgotUserNameContainer from '../../screens/ForgotUsername/containers';

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
                <Scene hideNavBar={true} initial={true}>
                    <Scene key="forgotPassword" component={ForgotPasswordContainer} title="Forgot Password" />
                    <Scene key="forgotUsername" component={ForgotUserNameContainer} title="Forgot Username" />
                    <Scene key="loginContainer" component={LoginContainer} title="Login" />
                    <Scene key="languageContainer" component={LanguageContainer} title="LanguageContainer" />
                    <Scene key="about" component={About} title="About" />
                </Scene>
            </Router>
        );
    }
}

Routes.defaultProps = defaultProps;

Routes.propTypes = propTypes;
