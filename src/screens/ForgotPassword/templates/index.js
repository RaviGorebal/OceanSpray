import PropTypes from "prop-types";
import React, {Component} from "react";
import {View, Text,SafeAreaView,TouchableOpacity,ImageBackground} from "react-native";
import styles from "./styles";
import Toolbar from "../../../components/Toolbar";
import OceanSprayImages from "../../../constants/imageSource";
import Button from "../../../components/Button";


const propTypes = {
    loginForm: PropTypes.element,
    onSubmit: PropTypes.func,
    onbackPress: PropTypes.func,
    onForgotUsername:PropTypes.func
}

const defaultProps = {
    loginForm: (<Text>Login Form</Text>),
    onSubmit: () => {},
    onbackPress: () => {},
    onForgotUsername: () => {},
}


class ForgotPasswordTemplate extends Component {

    render() {
        return (
            <React.Fragment>
                <SafeAreaView style={{ flex: 0, backgroundColor: '#ba102c' }} />
                <SafeAreaView style={styles.appContainer}>
                    <Toolbar
                        onPressNavigateBack={this.props.onPressNavigateBack}
                        notificationIcon={""}
                        title={this.props.toolbarTitle} />
                    <View style={styles.subContainer}>
                    <ImageBackground source={OceanSprayImages.authenticationBackgoundImage} resizeMode="cover" style={styles.backgroundImage}>
                        <View>
                            <Text style={styles.passwordResetText}>PASSWORD RESET</Text>
                        </View>
                    </ImageBackground>
                    <View>
                        <Text style={styles.emailText}>Enter the email that you used when register.</Text>
                        {this.props.loginForm}
                        <Text style={styles.emailSendText}>We will send you an email with instructions to resetting your Password</Text>
                        <Button title="Recover My Password" onPress={this.props.onSubmit}/>
                    </View>
                    <TouchableOpacity onPress={this.props.onForgotUsername}>
                         <Text style={styles.forgotUsernameText}>Forgot your Username?</Text>
                    </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </React.Fragment>
        );
    }
}

ForgotPasswordTemplate.defaultProps = defaultProps;

ForgotPasswordTemplate.propTypes = propTypes;

export default ForgotPasswordTemplate;