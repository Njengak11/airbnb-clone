import { StyleSheet } from 'react-native'; 

const styles = StyleSheet. create({
button:{
    borderWidth:1,
    borderRadius:15,
    width:30,
    height:30,
    alignItems:'center',
    justifyContent:'center',
    borderColor:'#676767',
},
row:{
    flexDirection:'row',
                justifyContent: 'space-between',
                borderBottomWidth:1,
                borderColor:'lightgrey',
                marginHorizontal:20,
                paddingVertical:20,
}
});

export default styles;