import React, { Component } from 'react';
// import { View, Text, ImageBackground } from 'react-native'
// import {navigateTo} from "../../../utils/utility";
import FlowchartTemplate from '../Templates';
import { connect } from "react-redux";


class FlowchartContainer extends Component {

    onPressFirstButton=()=>{
      alert("first button")
      }
      onPressSecondButton=()=>{
        alert("second button")
      }
    


    render(){
            return(<FlowchartTemplate 
                onPressFirstButton={this.onPressFirstButton}
                onPressSecondButton={this.onPressSecondButton}/>)
    }
}


const mapStateToProps = state =>({
  state
})

const mapDispatchToProps = dispatch =>({
  dispatch
})

export default connect(mapStateToProps,mapDispatchToProps)(FlowchartContainer);