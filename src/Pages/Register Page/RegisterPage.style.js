import { StyleSheet } from 'react-native';
import Colors from '../../Styles/Colors';
import Fonts from '../../Styles/Fonts';

export default StyleSheet.create({
    container:{
        backgroundColor:Colors.backgroundColor,
        flex:1,
        padding:10,
        justifyContent: 'center',
    },
    titleText:{
        color:'white',
        fontSize:35,
        fontFamily:Fonts.defaultTextFontFamily,
        marginBottom:10
    },
    innerContainer:{
        padding:10
    },
    joinUsText:{
        color:'white',
        fontSize:25,
        fontFamily:Fonts.defaultTextFontFamily
    },
    registerContainer:{
        paddingTop:15,
        
    }
})