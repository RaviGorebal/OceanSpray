/**
* @author Sravya <yerrusravya@photoninfotech.net>
* @version 
* @summary graph Screen for the application.
* @description graph drawn accocrding to the deleveries and harvest data 
*/

/**
* @import React compoment from "react" for creating custom react component and to use lifecycle
* hooks come along with react.
* @import View, Image, ScrollView 
*/
import React, {Component} from 'react';
import PropTypes from "prop-types";
import {View,Image,ScrollView,TouchableOpacity,Text,UIManager,LayoutAnimation} from 'react-native';
import ToggleButton from "../../../components/ToggleButton";
import Toolbar from '../../../components/Toolbar';
import styles from "./styles";
import OceanSprayImages from "../../../constants/imageSource";

const propTypes = {
  onPressFirstButton:PropTypes.func,
  onPressSecondButton:PropTypes.func,
  }

const defaultProps = {
  onPressFirstButton:()=>{},
  onPressSecondButton:()=>{},
}

class FlowchartTemplate extends Component {
  constructor(props){
    super(props);
    this.state={
        buttonId: 1,
        buttonId2: 1,
        expanded1: false,
    }
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleButtonClick2 = this.handleButtonClick2.bind(this);
}
_animate = () => {
  UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
  LayoutAnimation.easeInEaseOut();

}
  handleButtonClick(id){
          this.setState({buttonId:id});
    }
  handleButtonClick2(id){
          this.setState({buttonId2:id});
    }
    toggle=(key)=>{
      if(key==='expanded1'){
           this.setState({
             expanded1: !this.state.expanded1
          }, () => {
              this._animate();
          });
         }
    }
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Toolbar 
            onPressLeftIcon={this.props.onbackPress}
            title={this.props.toolbarTitle}
          />
          <View style={styles.toggleButton}>
            <ToggleButton
              firstButtonName="Deleveries"
              secondButtonName="Harvest Data"
              buttonId={this.state.buttonId}
              handleButtonClick={this.handleButtonClick}
              onPressFirstButton={this.props.onPressFirstButton}
              onPressSecondButton={this.props.onPressSecondButton}
            />
            <ToggleButton
              firstButtonName="Regional"
              secondButtonName="My Farm"
              firstViewContainer={styles.firstViewContainer}
              buttonId={this.state.buttonId2}
              toggleButtonContainer={styles.toggleButtonContainer}
              textStyles={styles.textStyles}
              handleButtonClick={this.handleButtonClick2}
              onPressFirstButton={this.props.onPressFirstButton}
              onPressSecondButton={this.props.onPressSecondButton}
              secondButtonTextStyles={styles.secondButtonTextStyles}
            />
          </View>
          <View style={styles.mainViewForList}>
            <TouchableOpacity
              value={this.state.expanded1}
              onPress={() => this.toggle("expanded1")}>
              <View style={styles.subViewForMainList}>
                <View style={styles.loyaltyMemberGroupView}>
                  <Text style={styles.loyaltyMemberGroup} >Contract #0705075 <Text style={styles.textSpan}>(all)</Text></Text>
                </View>
                <View style={styles.expandIconView}>
                    <Image source={this.state.expanded1 ? OceanSprayImages.arrowUp : OceanSprayImages.arrowDown} style={styles.expandIcon} />
                </View>
              </View>
            </TouchableOpacity>
              {this.state.expanded1 &&
                <View style={styles.flatListView}>
                  <Text>3</Text>
                </View>
              }
          </View>
          <View style={styles.graphView}>
            <Image style={styles.graph} source={require('../../../assets/graph1.png')}/>
            <Image style={styles.graph} source={require('../../../assets/graph2.png')}/>
            <Image style={styles.graph} source={require('../../../assets/graph3.png')}/>
            <Image style={styles.graph} source={require('../../../assets/graph4.png')}/>
          </View>
        </View>
      </ScrollView>
    );
  }
}
FlowchartTemplate.defaultProps = defaultProps;

FlowchartTemplate.propTypes = propTypes;

export default FlowchartTemplate;