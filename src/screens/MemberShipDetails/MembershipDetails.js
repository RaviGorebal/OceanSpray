
import {connect} from "react-redux";
import React, {Component} from "react";
import {SafeAreaView,Text,Platform,Dimensions, View,ScrollView,Image,TouchableOpacity,UIManager,LayoutAnimation, FlatList} from 'react-native';
import Icon from "react-native-vector-icons/EvilIcons";

import memberloyaltyStyles from "../MemberShipDetails/memberloyaltyStyles"

// const SFProTextMedium = "SFProText-Medium";

// const SFProTextRegular = "SFProText-Regular";
const SFProTextSemibold = "SFProText-Semibold";
const RobotoMedium = "Roboto-Medium";
const RobotoRegular = "Roboto-Regular";
const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

/**
* @class MembershipDetails
* @extends Component
* @summary Represents MembershipDetails class.
* @description This is a MembershipDetails class. It extands react Component class for using the functions comes along with it.
*/
export class MembershipDetails extends Component {

    /**
    * @constructor It is initializing the state with default properties.
    * entries: String property for default Images
    */
    constructor(props) {
        super(props);
        this.state = {
            facebookToken : false,

            expanded1: false,
            expanded2: false,
            entries: [
              {key: 1, content: "Trash Assessment Standard:"},
              {key: 2, content: "Screening Assessment Standard:"},
              {key: 3, content: "Domestic Assessment:"},
              {key: 4, content: "Color Assessment No Offests:"},
          ]
        };
    }

    _animate = () => {
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        LayoutAnimation.easeInEaseOut();
      
    }

     toggle=(key)=>{
       if(key==='expanded1'){
      this.setState({
               expanded1: !this.state.expanded1
            }, () => {
                this._animate();
            });
        }else{
            this.setState({
              expanded2: !this.state.expanded2
           }, () => {
               this._animate();
           });
          }
     }
 


/**
    * @function onCloseClick
    * This method calls when user clicks on icon close
    */
   onCloseClick = () =>{
    navigateBack();
}

    render() {
        // const {isLoggedin}=this.props;
        return (
            <React.Fragment>
            {/* <SafeAreaView style={{ flex: 0, backgroundColor: '#ba102c' }} > */}
            <ScrollView style={memberloyaltyStyles.mainView}>
                <View style={{ paddingBottom:20}}>
                    <View style={memberloyaltyStyles.mainViewForList}>
                        <TouchableOpacity 
                            value={this.state.expanded1}
                            onPress= {()=>this.toggle("expanded1")}>
                            <View style={memberloyaltyStyles.subViewForMainList}>
                                {/* <View style={memberloyaltyStyles.imageViewForMainList}>
                                    <Image style={memberloyaltyStyles.imageForMainList} source={require("../assets/images/home/images/screenTwo/fifth.png")}/>
                                </View> */}
                                <View style={memberloyaltyStyles.loyaltyMemberGroupView}>
                                    <Text style={memberloyaltyStyles.loyaltyMemberGroup}>Total Assessment: $914.54</Text>
                                </View>
                                <View style={memberloyaltyStyles.expandIconView}>
                                    <Icon name= { this.state.expanded1 ? "chevron-up" : "chevron-down"} size={35} color='black' style={memberloyaltyStyles.expandIcon} />
                                </View>
                            </View>
                        </TouchableOpacity>
                            {this.state.expanded1 &&
                                <View style={memberloyaltyStyles.flatListView}>
                                    <FlatList
                                        showsVerticalScrollIndicator={false}
                                        data={this.state.entries}
                                        keyExtractor={(item, index) => index.toString()}
                                        ref={(ref) => {
                                            this.flatListRef = ref;
                                        }}
                                    ItemSeparatorComponent={() => <View style={memberloyaltyStyles.subListSeperator} />}
                                    renderItem={({item, index}) => {
                                    return (
                                        <View style={memberloyaltyStyles.mainViewforSubListView}>
                                            <View style={memberloyaltyStyles.imageforSubContentView}>
                                                {Platform.OS === "ios" ? (
                                                    <Image style={memberloyaltyStyles.imageforSubContent} source={item.card} />
                                                ) : (
                                                    <Image style={memberloyaltyStyles.imageforSubContent} source={item.androidCard} />
                                                    )
                                                }
                                            </View>
                                            <View style={memberloyaltyStyles.subTextContentView}>
                                                <Text style={memberloyaltyStyles.subTextContent}>{item.content} </Text>

                                            </View>
                                        </View>
                                            );
                                    }} />
                                </View>    
                            }
                </View>
            </View>
        </ScrollView>
        {/* </SafeAreaView> */}
        </React.Fragment>
        );
    }
}





/**
* Converting redux state to props for the Login component
* @function mapStateToProps: It takes redux state as params and converts it as props for the above component.
* @params {object} state: redux state fetched from store
* @returns {object} props: converted props which can be used in the above component.
*/
const mapStateToProps = state => ({
    // isLoggedin: state.auth.isLoggedin,
});

/**
* Converting functions to props for the Login component
* @function mapDispatchToProps: It takes dispatch as params and further pass it to the methods
* with given payloads.
* The methods are converted into props and passed to the Login Component for use
* @params {function} dispatch: It dispatches action to the reducer
* @returns {object} props: Its converted props and have methods.
*/
const mapDispatchToProps = dispatch => ({
});

/**
* @function connect: It takes "mapStateToProps" and "mapDispatchToProps" which converts state and methods
* as props for the component.
*/
export default connect(mapStateToProps, mapDispatchToProps)(MembershipDetails);