import { StyleSheet } from 'react-native';
import Fonts from '../../Styles/Fonts';
import Colors from '../../Styles/Colors';
export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.backgroundColor,
        padding:10
    },
    messageInputContainer:{
        flexDirection:'row',
    },
    messageInputInnerContainer:{
        flex:1,
   
    },
    noMessageErrorContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    noMessageErrorText:{
        color:'red',
        fontFamily:Fonts.defaultTextFontFamily,
        fontSize:20,
    }


})