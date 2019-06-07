import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native'
import {navigateTo} from "../../../utils/utility";
import FlowchartTemplate from '../Templates';

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

})

const mapDispatchToProps = dispatch =>({

})

export default connect(mapStateToProps,mapDispatchToProps)(FlowchartContainer);