
import { StyleSheet, Platform, Dimensions } from 'react-native';
const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

//Fonts fot both Android & ios
const SFProTextMedium = "SFProText-Medium";
const SFProTextRegular = "SFProText-Regular";
const SFProTextSemibold = "SFProText-Semibold";
const RobotoMedium = "Roboto-Medium";
const RobotoRegular = "Roboto-Regular";


const memberloyaltyStyles = StyleSheet.create({
    mainView:{
      flex:1,
        backgroundColor:"#FFFFFF",
        // paddingTop: ((Platform.OS === 'ios' && deviceHeight === 896 && deviceWidth === 414) || (Platform.OS === 'ios' && deviceHeight === 812 && deviceWidth === 375) ? 30 : 0),
        paddingTop: ((Platform.OS === 'ios' && deviceHeight === 667 && deviceWidth === 375) || (Platform.OS === 'ios' && deviceHeight === 736 && deviceWidth === 414)? 20 : 0)
      },
     closeButtonView: { flex: 1,
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#FFFFFF"
      },
    closeButtonSubView:{
      alignSelf: 'flex-end',
      position: 'absolute',
      paddingRight : 16,
      paddingTop:5,
      },
    closeButton:{  
      width: 32,
      height: 32,
      resizeMode : 'contain',
      justifyContent: 'flex-end'
    },
    allBadge:{ 
      flex: 1,
      flexDirection:'row',
      justifyContent:'space-between',
      marginTop :  Platform.OS === "ios" ? 48 : 23,
      marginLeft:-3,
      backgroundColor:"#FFF"
      },
      starMedal:{
        height: 48,
        width: 25, 
        marginLeft:-54 
      },
      whiteMedal:{
        height: 48, 
        width: 26,
        marginLeft:11 
      },
      goldMedal:{ 
        height: 48, 
        width: 29,
        marginLeft:Platform.OS === "ios" ? 9 : 8,
      },
      silverMedal:{ 
        height: 48, 
        width: 27, 
        marginLeft:9,
      },
      bronzeMedal:{
        height: 49, 
        width: 26, 
        marginLeft:8,
        marginRight:-54 
      },
      titleView:{ 
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:"#FFF",
        paddingBottom:2, 
        paddingTop:Platform.OS === "ios" ? 15 : 14,
      },
      titleViewMainText:{ 
        fontSize: 22,
        color: "#000",
        fontFamily: Platform.OS === "ios" ? SFProTextMedium : RobotoMedium,
        paddingBottom:Platform.OS === "ios" ? 5 : 4,
      },
        titleViewSubText:{ 
          fontSize:14,
          paddingBottom:10,
          color:"#000",
          fontFamily: Platform.OS === "ios" ? SFProTextRegular : RobotoRegular,
        },
        joinNowView:{ 
          marginTop:10,     
        borderRadius:25,
        paddingVertical:8,
        paddingHorizontal:15,
      },
        joinNowText:{
          color:'#fff',
          paddingVertical:2,
          textAlign:"center",
          fontSize:12,
          fontFamily : Platform.OS === "ios" ? SFProTextMedium : RobotoMedium,
        },
      contentView:{
        paddingTop:16,
        paddingHorizontal:8,
        paddingBottom:40,
        borderBottomColor:'rgb(239, 239, 239)',
        borderBottomWidth:1,
      },
      firstContent:{
        fontSize:16,
        paddingHorizontal:7,
        fontFamily : Platform.OS === "ios" ? SFProTextRegular : RobotoRegular,
        color:"rgb(132,132,132)"}
        ,
      secondContent:{
        paddingTop:Platform.OS === "ios" ? 15 : 13,
        paddingHorizontal:7,
        fontSize:16,
        fontFamily : Platform.OS === "ios" ? SFProTextRegular : RobotoRegular,
        color:"rgb(132,132,132)"
      },
      loyaltyHeading:{
        paddingTop:15, 
        paddingLeft:6,
        color:'#000',
        fontSize:16,
        fontFamily : Platform.OS === "ios" ? SFProTextRegular : RobotoRegular,
      },
      subListSeperator:{
        marginLeft: 0,
        marginRight: 0,
        height: 0.1,
          },
    mainViewForList:{
     
    },
    subViewForMainList:{
      flex:1,
      flexDirection:'row',
      justifyContent:'space-between',
      borderBottomColor:'rgb(239, 239, 239)',
      borderBottomWidth:1,
      paddingTop:19,
      paddingBottom:19,
    },
    imageViewForMainList:{
      flex:0.18,
      justifyContent:"flex-start",
      alignSelf:"center", 
      paddingLeft:15,
    },
    imageForMainList:{ 
      height: 61, 
      width: 61, 
    },
    loyaltyMemberGroup:{ 
      fontSize: 20,
      marginTop:-1, 
      fontFamily : Platform.OS === "ios" ? SFProTextMedium : RobotoMedium,
      fontWeight: "bold",
      color: "#000",
      
    },
    loyaltyMemberGroupView:{
      flex:0.8, 
      justifyContent:"center",
      flexDirection:'column',
      paddingLeft:22
    },
    loyaltyPoints:{
      fontSize: 14,
      paddingTop:5, 
      fontFamily : Platform.OS === "ios" ? SFProTextRegular : RobotoRegular,
    },
    expandIconView:{
      flex:0.1, 
      justifyContent:"flex-end", 
      alignSelf:"center",
      paddingRight:Platform.OS === "ios" ? 20 : 20,
  },
    expandIcon:{
    },
    flatListView:{
      paddingTop:17,
      paddingBottom:20,
      backgroundColor:"#FAFAFA",
      borderBottomColor:'rgb(239, 239, 239)',
      borderBottomWidth:1,
    },
    mainViewforSubListView:{  
      flex:1,
      flexDirection: "row",
      paddingVertical:9,
    },
    imageforSubContentView:{
      flex:0.2,
      justifyContent:"flex-start",
      alignSelf:"flex-start",
      paddingLeft:17,
      paddingTop:6,
    },
    imageforSubContent:{ 
      height: 27, 
      width: 27,
      resizeMode:"contain",
      marginLeft:2,
      paddingTop:5
    },
  subTextContentView:{ 
    flex:1.2,
    justifyContent:"center",
    alignItems:"flex-start",
  },
    subTextContent:{ 
    color:"#848484",
    fontSize:14,
    fontFamily: Platform.OS === "ios" ? SFProTextRegular : RobotoRegular,
    paddingRight:15,
    paddingTop:1}
  });
  
  export default memberloyaltyStyles;