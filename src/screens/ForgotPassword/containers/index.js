import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput} from 'react-native';
import {Icon} from "react-native-elements";
import styles from "./styles";
import ForgotPasswordTemplate from "../templates";

export default class ForgotPasswordContainer extends Component {


  renderContent=()=>{
    return(
      <View style={styles.container}>
        <Text >Welcome to HomePage</Text>
        <View style={{
          flex:1,
          flexDirection:'column',
          backgroundColor:'#f8f4f4'
      }}>
      

      </View>
      </View>
    )
  }

  render() {
    return (
     
    <ForgotPasswordTemplate 
      renderContent={this.renderContent()}
      />
    );
  }
}

