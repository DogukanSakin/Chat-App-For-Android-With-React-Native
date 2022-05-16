import { StyleSheet } from 'react-native';
import Colors from '../../Styles/Colors';
import Fonts from '../../Styles/Fonts';
 export default StyleSheet.create({
    inputBoxContainer:{
        flex:1,
        color:'white',
        fontFamily:Fonts.defaultTextFontFamily
      
    },
    container:{
        backgroundColor:Colors.defaultComponentDarkColor,
        borderRadius:50,
        paddingHorizontal:15,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginBottom:15
    }
})