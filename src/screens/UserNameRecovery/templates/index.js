import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native'
import Button from './../../../components/Button'
import styles from './style';
import Logo from '../../../assets/bitmap.png';

class UserNameRecovery extends Component {
    render() {
        return (
            <View style={styles.mainView}>
                <Text>Wellcome to UsernameRecover</Text>
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
                <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
            </View>

        )
    }
}


export default UserNameRecovery 