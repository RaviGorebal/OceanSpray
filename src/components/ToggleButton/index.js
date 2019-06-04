import PropTypes from "prop-types";
import React, {Component} from "react";
import {View, Text,Image,Alert,TouchableOpacity} from "react-native";
import styles from "./styles";

const propTypes = {
    onPressFirstButtonView:PropTypes.func,
    onPressSecondButtonView:PropTypes.func,
    toolbarContainer: PropTypes.object,
    toggleButtonContainer:PropTypes.object,
    firstButtonName:PropTypes.string,
    secondButtonName:PropTypes.string

};

const defaultProps = {
    onPressFirstButtonView: ()=>{},
    onPressSecondButtonView: ()=>{},
    toolbarContainer:{},
    toggleButtonContainer:{},
    firstButtonName:"Button 1",
    secondButtonName:"Button 2"

}

class ToggleButton extends Component{

    constructor(props){
        super(props);
        this.state={
            buttonId: 1,
        }
        this.handleViewContainerClick = this.handleViewContainerClick.bind(this);
    }

    handleViewContainerClick(id){
        this.setState({
            buttonId:id
        });
      if(this.state.buttonId == 1){
         this.props.onPressFirstButtonView();
      }else{
          this.props.onPressSecondButtonView();
      }
      }
    render(){
        console.log(this.props.notifications);
        return(
                <View style={[styles.toggleButtonContainer, this.props.toggleButtonContainer]}>
                    <TouchableOpacity onPress={()=>this.handleViewContainerClick(1)} style={this.state.buttonId === 1 ? [styles.fistViewContainer,this.props.firstViewContainer]: [styles.secondViewcontainer,this.props.secondViewContainer]}>
                        <View >
                            <Text style={this.state.buttonId === 1 ? [styles.textStyles,this.props.textStyles]:[styles.secondButtonTextStyles,this.props.secondButtonTextStyles]}>{this.props.firstButtonName}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.handleViewContainerClick(2)} style={this.state.buttonId === 2 ? [styles.fistViewContainer,this.props.firstViewContainer,styles.secondButtonView]: [styles.secondViewcontainer,this.props.secondViewContainer]} >
                        <View >
                            <Text style={this.state.buttonId === 1 ? [styles.secondButtonTextStyles,this.props.secondButtonTextStyles]:[styles.textStyles,this.props.textStyles]}>{this.props.secondButtonName}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
           
        )
    }
}




ToggleButton.defaultProps = defaultProps;
ToggleButton.propTypes = propTypes;

export default ToggleButton;