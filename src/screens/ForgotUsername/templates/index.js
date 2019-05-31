import PropTypes from "prop-types";
import React, { Component } from 'react';
import { View, Text, ImageBackground, SafeAreaView,TouchableOpacity } from 'react-native';
import Button from './../../../components/Button'
import styles from './style';
import Logo from '../../../assets/bitmap.png';
import Toolbar from '../../../components/Toolbar';


const propTypes = {
    loginForm : PropTypes.element,
    onsubmit : PropTypes.func,
    onbackPress: PropTypes.func,
    onForgotPassword:PropTypes.func
};

const defaultProps = {
    loginForm: (<Text>Login form</Text>),
    onbackPress: () => {},
    onForgotPassword: () =>{},
    onForgotPassword: () => {}
};


class UserNameRecovery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        };
        this.onChange = this.onChange.bind(this);
     
    }

    

    onChange(key, value) {
        this.setState({
            [key]: value
        });
    }

    onSubmit(values) {
        alert("success");
    }

    render() {
        return (
            <React.Fragment>
                <SafeAreaView style={{ flex: 0, backgroundColor: '#ba102c' }} />
                <SafeAreaView style={styles.mainView}>
                    <Toolbar 
                    onPressNavigateBack={this.props.onPressNavigateBack}
                    notificationIcon={""}
                    title={this.props.toolbarTitle}/>
                    <ImageBackground source={Logo} resizeMode="cover" style={styles.backgroundImage}>
                        <View>
                            <Text style={styles.imgtextCenter}>USERNAME RECOVER</Text>
                        </View>
                    </ImageBackground>
                    <Text style={styles.emailText}>Enter the email that you used when register.</Text>
                              {this.props.loginForm}
                              <View>
                                
                    <Text style={styles.emailSendText}>We will send you an email with instructions to recover your username</Text>
                    </View>
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

export default  UserNameRecovery;