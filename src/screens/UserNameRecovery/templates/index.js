import React, { Component } from 'react';
import { View, Text, ImageBackground, SafeAreaView } from 'react-native'
import Button from './../../../components/Button'
import styles from './style';
import Logo from '../../../assets/bitmap.png';
import Toolbar from '../../../components/Toolbar';

class UserNameRecovery extends Component {
    render() {
        return (
            <React.Fragment>
     <SafeAreaView style={{ flex: 0, backgroundColor: 'red' }} />
            <View style={styles.mainView}>
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
                <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
            </View>
          
            </React.Fragment>

        )
    }
}


export default UserNameRecovery 