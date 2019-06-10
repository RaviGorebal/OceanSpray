import { StyleSheet,Dimensions,Platform} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgb(235, 240, 243)',
    },
    toggleButton:{
      marginTop:12,
      marginBottom:12
    },
  firstViewContainer:{
      backgroundColor: "#fff",
      borderColor:'rgb(186, 16, 44)',
      borderWidth:1
  },
  toggleButtonContainer: {
      height: 40,
      borderRadius:8,
      borderWidth: 2,
      borderColor: 'rgb(210, 215, 217)',
      backgroundColor:'#fff',
      alignItems:'center',
      flexDirection: "row",
      justifyContent: "space-between",
      width:Dimensions.get("window").width-140,
      marginLeft:70,
      marginTop:20
  },
  textStyles:{
      color:'rgb(186, 16, 44)'
  },
  secondButtonTextStyles:{
      color:'rgb(43, 43, 43)'
  },
  graphView:{
    flex:1,
  },
  graph:{
    width: Dimensions.get("window").width - 26,
    height: Dimensions.get("window").height - 480,
    borderRadius: Platform.OS === "ios" ? 6 : 6,
    marginLeft:13,
    marginBottom:15,
    borderWidth: 1,
    borderColor: 'rgb(210, 215, 217)',
  },
  subViewForMainList:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    borderBottomColor:'rgb(239, 239, 239)',
    borderBottomWidth:1,
    paddingTop:10,
    paddingBottom:10,
    borderWidth: 1,
    borderColor: 'rgb(210, 215, 217)',
    backgroundColor:"#fff",
    margin:10,
  },
  loyaltyMemberGroupView:{
    flex:0.8, 
    justifyContent:"center",
    flexDirection:'column',
  },
  loyaltyMemberGroup:{ 
    fontSize: 15,
    marginTop:-1, 
    fontWeight: "500",
    color: "#000",
    marginLeft:10 
  },
  expandIconView:{
    flex:0.1, 
    justifyContent:"center",
    paddingRight:Platform.OS === "ios" ? 10 : 5,
  },
  textSpan : {
    color:'rgb(43,43,43)',
    fontSize:14,
  },
  expandIcon:{
    height:15
  },
});
export default styles;