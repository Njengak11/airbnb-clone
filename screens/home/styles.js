import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
image:{
    width:400,
    height:500,
    resizeMode:"cover",
    justifyContent:"center"
},
title:{
fontSize:100,
fontWeight:"bold",
color:'white',
width:'70%',
marginLeft:25
},
button:{
backgroundColor:'white',
width:200,
marginLeft:25,
marginTop:25,
height:40,
borderRadius:5,
justifyContent:"center",
alignItems:"center"
},
buttonText:{
fontSize:15,
fontWeight:"bold"
},
searchButton:{
    backgroundColor:'white',
    height:60,
    width:Dimensions.get('screen').width - 20,
    borderRadius:30,
    marginHorizontal: 20,
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row",
    position:"absolute",
    top:20,
    zIndex:100
    },
searchButtonText:{
    fontSize:15,
    fontWeight:"bold"
    },
});

export default styles;