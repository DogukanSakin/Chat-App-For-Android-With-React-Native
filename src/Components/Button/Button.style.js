import { StyleSheet } from 'react-native';
import Fonts from '../../Styles/Fonts';
import Colors from '../../Styles/Colors';
export default StyleSheet.create({
    buttonText:{
        color:'white',
        fontFamily:Fonts.defaultButtonTextFontFamily,
        fontSize:20,
        textAlign:'center',
        padding:10
    },
    buttonContainer:{
        backgroundColor:Colors.defaultComponentGreenColor,
        borderRadius:50
    }
    
})