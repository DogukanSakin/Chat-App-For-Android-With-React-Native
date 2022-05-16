import { StyleSheet } from 'react-native';
import Colors from '../../Styles/Colors';
import Fonts from '../../Styles/Fonts';
export default StyleSheet.create({
    container:{
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center',
        height:100,
        width:100,
        borderRadius:20,
        borderColor:'white',
        margin:10,
      
    },
    roomNameText:{
        color:Colors.defaultComponentGreenColor,
        fontFamily:Fonts.defaultTextFontFamily,
        fontSize:17,
        paddingVertical:5,
        textAlign:'center'
    },
  
})