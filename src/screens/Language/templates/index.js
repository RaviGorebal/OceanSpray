import React, {Component} from 'react';
import PropTypes from "prop-types";
import { StyleSheet, Text, View,Image,TouchableOpacity} from 'react-native';
import {navigateTo} from "../../../utils/utility";


const propTypes = {
    onbackPress: PropTypes.func,
    onForgotPassword:PropTypes.func
};

const defaultProps = {
    onbackPress: () => {},
    onForgotPassword: () =>{}
};


onForgotPassword = () =>{
    navigateTo("loginContainer")
}
class LanguageTemplate extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:0.5,justifyContent: 'center',alignItems: 'center',}}>
          <TouchableOpacity>
            <View>
              <Image source={require("../../../assets/OceanSprayLogo.png")}/>
            </View>
          </TouchableOpacity>
          <View>
            <Text style={styles.text}>GROW ON</Text>
          </View>
        </View>
        <View style={{flex:0.5}}>
          <View>
            <Text style={styles.language}>Select a language:</Text>
            {/* <TouchableOpacity style={styles.button}>
              <Text style = {styles.buttonText}>
                English
              </Text>
            </TouchableOpacity> */}
                    <TouchableOpacity onPress={this.props.onForgotPassword} style={styles.button}>
                         <Text style={styles.buttonText}>English</Text>
                    </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style = {styles.buttonText}>
                French
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

LanguageTemplate.defaultProps = defaultProps;

LanguageTemplate.propTypes = propTypes;

export default LanguageTemplate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ba102c',
  },
  text: {
    margin:10,
    fontSize: 50,
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight:'bold',
  },
  language:{
    margin:10,
    fontSize: 30,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight:'bold',
    color: '#00267F',
    paddingTop:10,
    paddingBottom:10,
  },
  button: {
    width: 400, 
    height: 60,
    margin:10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#FFFFFF',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
});