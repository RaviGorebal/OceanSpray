import {StyleSheet,Dimensions} from "react-native";


const styles = StyleSheet.create({
      appContainer: {
         flex: 1,
         backgroundColor:"red"
      },
      subContainer:{
         height:120,
         backgroundColor:"#ebf0f3",
      },
      actionContainer:{
         height:50,
         flexDirection:"row",
         backgroundColor:"#FFF",
         justifyContent:"space-between",
         paddingHorizontal:20
      },
      resetView:{
         justifyContent:"center",
         alignItems:"flex-start"
      },
      applyView:{
         justifyContent:"center",
         alignItems:"flex-end"
      },
      resetText:{
         color:"rgb(0, 38, 127)",
         fontWeight:"400",
      },
      applyText:{
         color:"rgb(0, 38, 127)",
         fontWeight:"600",
      },
      sortTextView:{
         paddingTop:15,
         paddingBottom:5,
         
      },
      sortTextStyle:{
         paddingLeft:20
      },

   });

   export default styles;