import PropTypes from "prop-types";
import React, {Component} from "react";
import {View, Text,Image,Alert,TouchableOpacity} from "react-native";
import styles from "./styles";

const propTypes = {
    onPressFirstButton:PropTypes.func,
    onPressSecondButton:PropTypes.func,
    toolbarContainer: PropTypes.object,
    toggleButtonContainer:PropTypes.object,
    firstButtonName:PropTypes.string,
    secondButtonName:PropTypes.string,
    handleButtonClick:PropTypes.func
};

const defaultProps = {
    onPressFirstButton: ()=>{},
    onPressSecondButton: ()=>{},
    handleButtonClick:()=>{},
    toolbarContainer:{},
    toggleButtonContainer:{},
    firstButtonName:"Button 1",
    secondButtonName:"Button 2"

}

class ToggleButton extends Component{

    render(){
        return(
                <View style={[styles.toggleButtonContainer, this.props.toggleButtonContainer]}>
                    <TouchableOpacity onPress={()=>{this.props.handleButtonClick(1) ; this.props.onPressFirstButton();this.props.onPressFirstButtonView()}} style={this.props.buttonId === 1 ? [styles.fistViewContainer,this.props.firstViewContainer]: [styles.secondViewcontainer,this.props.secondViewContainer]}>
                        <View >
                            <Text style={this.props.buttonId === 1 ? [styles.textStyles,this.props.textStyles]:[styles.secondButtonTextStyles,this.props.secondButtonTextStyles]}>{this.props.firstButtonName}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{this.props.handleButtonClick(2); this.props.onPressSecondButton();this.props.onPressFirstButtonView()}} style={this.props.buttonId === 2 ? [styles.fistViewContainer,this.props.firstViewContainer,styles.secondButtonView]: [styles.secondViewcontainer,this.props.secondViewContainer]} >
                        <View >
                            <Text style={this.props.buttonId === 2 ? [styles.textStyles,this.props.textStyles]:[styles.secondButtonTextStyles,this.props.secondButtonTextStyles]}>{this.props.secondButtonName}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
           
        )
    }
}




ToggleButton.defaultProps = defaultProps;
ToggleButton.propTypes = propTypes;

export default ToggleButton;