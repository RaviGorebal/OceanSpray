import React, {Component} from 'react';
import {Text, View} from 'react-native';
import { connect } from "react-redux";
import { compose } from "redux";
import { Field, reduxForm } from "redux-form";
import validator from "validator";
import {Icon} from "react-native-elements";

import ForgotPasswordTemplate from "../templates";
import {navigateTo,navigateBack} from "../../../utils/utility";
import InputText from "../../../components/InputText";
/**
* @import styles object. This object have all the styles written for the screens.
* the styles have been defined in a file named "styles" which is again importing
* an object from theme file when our theme related styles have been defined.
*/
import styles from "./styles";


/**
* @class ForgotPasswordContainer
* @extends Component
* @summary Represents ForgotPasswordContainer class.
* @description This is a ForgotPasswordContainer class. It extands react Component class for using the functions comes along with it.
*/
class ForgotPasswordContainer extends Component {

  onSubmit = (values) => {

    console.log("submit is working");
    // if (values && values.newPassword) {
    //     const payload = {
    //         key: this.props.otp,
    //         newPassword: values.newPassword
    //     };
    //     resetPasswordRequest(payload, () => {
    //         navigateTo("login");
    //     });
    // }
}

  /**
    * @function renderTextInput: Its called in the render function and returns a input component.
    * @params {object} It takes field object which has input properties which further gets passed
    * to the input component.
    * @return {Compoenent} It returns a presenter input component.
    */
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

  onPressNavigateBack = () =>{
    navigateTo("loginContainer")
  }
  onForgotUsername = () =>{
    navigateTo("loginContainer")
  }
 

  render() {
    const {handleSubmit} = this.props;
    return (
    <ForgotPasswordTemplate 
      loginForm={this.renderLoginForm()} 
      onPressNavigateBack={this.onPressNavigateBack}
      onSubmit={this.onSubmit}
      onForgotUsername={this.onForgotUsername}
      />
    );
  }
}
/**
* @function validate: Its called before form submit. Its validates the form value and returns an error object.
* if it finds any error, it stops the form submission and throws it.
* @params {object} values: It takes form vulues as object.
* Validator library is used for email validation instead of regex.
* @return {object} errors: It returns errors object. If no properties in the errors then it calls the onSubmit method
*/
const validate = (values) => {
  const errors = {};
  if (!values.email) {
      errors.email = "Email is required";
  } else if (!validator.isEmail(values.email)) {
      errors.email = "Please enter a valid email address";
  }
  return errors;
};

const mapStateToProps = state =>({

})

const mapDispatchToProps = dispatch =>({

})

export default compose(connect(mapStateToProps,mapDispatchToProps),reduxForm({from:"forgotPassword",validate}))(ForgotPasswordContainer);