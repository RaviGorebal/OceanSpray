import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native'
import { connect } from "react-redux";
import { compose } from "redux";
import { Field, reduxForm } from "redux-form";
import validator from "validator";
import {navigateTo, navigateBack} from "../../../utils/utility";
import UserNameRecovery from '../templates';
import InputText from "../../../components/InputText";
import styles from './style';

class UserNameRecoveryContainer extends Component {


renderTextInput(field) {
    const { meta: { touched, error }, placeholder, keyboardType, isPasswordType, secureTextEntry, input: { onChange, ...restInput } } = field;
    return (
        <View>
            <InputText
                onChangeText={onChange}
                keyboardType={keyboardType}
                placeholder={placeholder}
                isPasswordType={isPasswordType}
                secureTextEntry={secureTextEntry}
                {...restInput}
            />
            {touched ? <Text style={{ color: "red" }}>{error}</Text> : null}
        </View>
    )

}

renderLoginForm = () => {
    return (
      <View style={[styles.FieldsView]}>
            <Field
            name="email"
            placeholder="E-mail Address"
            component={this.renderTextInput} />
        </View>);
  }

  onForgotPassword = () =>{
    navigateTo("forgotPassword")
}

onPressNavigateBack = () =>{
    navigateBack();
}



    render(){
            return(<UserNameRecovery 
                loginForm={this.renderLoginForm()} 
                onForgotPassword={this.onForgotPassword}
                onPressNavigateBack={this.onPressNavigateBack}/>)
    }
}

const validate = (values) => {
    const errors = {};
    if (!values.email) {
        errors.email = "Email is required";
    } else if (!validator.isEmail(values.email)) {
        errors.email = "Please enter a valid email address";
    }
    return errors;
  };

  
const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default compose(connect(mapStateToProps,mapDispatchToProps),reduxForm({from:"UserNameRecovery",validate}))(UserNameRecoveryContainer);