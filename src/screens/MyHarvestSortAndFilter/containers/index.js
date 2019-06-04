import React, {Component} from 'react';
import {Text, View} from 'react-native';
import { connect } from "react-redux";

import MyHarvestSortAndFilterTemplate from "../templates";
import {navigateTo,navigateBack} from "../../../utils/utility";
/**
* @import styles object. This object have all the styles written for the screens.
* the styles have been defined in a file named "styles" which is again importing
* an object from theme file when our theme related styles have been defined.
*/
import styles from "./styles";


/**
* @class MyHarvestSortAndFilterContainer
* @extends Component
* @summary Represents ForgotPasswordContainer class.
* @description This is a ForgotPasswordContainer class. It extands react Component class for using the functions comes along with it.
*/
class MyHarvestSortAndFilterContainer extends Component {



  onPressNavigateBack = () =>{
    navigateTo("loginContainer")
  }
 

  render() {
    const {handleSubmit} = this.props;
    return (
    <MyHarvestSortAndFilterTemplate 
      
      />
    );
  }
}


const mapStateToProps = state =>({

})

const mapDispatchToProps = dispatch =>({

})

export default connect(mapStateToProps,mapDispatchToProps)(MyHarvestSortAndFilterContainer);