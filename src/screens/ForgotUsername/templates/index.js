import PropTypes from "prop-types";
import React, { Component } from 'react';
import { View, Text, ImageBackground, SafeAreaView,TouchableOpacity } from 'react-native'
import Button from './../../../components/Button'
import styles from './style';
import Logo from '../../../assets/bitmap.png';
import Toolbar from '../../../components/Toolbar';


const propTypes = {
    onbackPress: PropTypes.func,
    onForgotPassword:PropTypes.func
};

const defaultProps = {
    onbackPress: () => {},
    onForgotPassword: () =>{}
};
class UserNameRecovery extends Component {
    render() {
        return (
            <React.Fragment>
                <SafeAreaView style={{ flex: 0, backgroundColor: 'red' }} />
                <SafeAreaView style={styles.mainView}>
                    <Toolbar 
                    onPressLeftIcon={this.props.onbackPress}
                    notificationIcon={""}
                    title={this.props.toolbarTitle}/>
                    <ImageBackground source={Logo} resizeMode="cover" style={styles.backgroundImage}>
                        <View>
                            <Text style={styles.imgtextCenter}>USERNAME RECOVER</Text>
                        </View>
                    </ImageBackground>
                    <Text style={styles.emailText}>Enter the email that you used when register.</Text>
                    <Text style={styles.emailSendText}>We will send you an email with instructions to recover your username</Text>
                    <Button
                        title="Recover My Username"
                        style={styles.buttonStyle}
                        textStyle={styles.buttonTextStyle}
                    />
                    <TouchableOpacity onPress={this.props.onForgotPassword}>
                         <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
                    </TouchableOpacity>
                </SafeAreaView>
          
            </React.Fragment>

        )
    }
}

UserNameRecovery.defaultProps = defaultProps;

UserNameRecovery.propTypes = propTypes;

export default UserNameRecovery;