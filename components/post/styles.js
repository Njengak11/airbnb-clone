import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
   container:{
       margin:20,
       marginTop:40
   } ,
   image:{
       width:'100%',
       aspectRatio:3/2,
       resizeMode:'cover',
       borderRadius:30,
   },
   bedroom:{
       fontSize:15,
       marginVertical:10,
       color:'grey',

   },
   description:{
       fontSize:18,
       lineHeight:26
   },
   prices:{
       fontSize:18,
       marginVertical:10
   },
   oldPrice:{
       color:'grey',
       textDecorationLine:'line-through'
   },
   newPrice:{
       fontWeight:'bold',
   },
   totalPrice:{
       color:'grey',
       textDecorationLine:'underline'
   }
})

export default styles;