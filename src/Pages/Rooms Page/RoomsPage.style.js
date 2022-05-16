import { StyleSheet } from 'react-native';
import Colors from '../../Styles/Colors';
import Fonts from '../../Styles/Fonts';
export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.backgroundColor,
        padding:10
    },
    userWelcomeText:{
        color:'white',
        fontFamily:Fonts.defaultTextFontFamily,
        fontSize:20,
        
    },
    userWelcomeContainer:{
        flexDirection:'row',
        paddingBottom:15
    },
    userText:{
        flex:1,
        color:'#41cd7d',
        fontFamily:Fonts.defaultTextFontFamily,
        fontSize:20,

    },
    noRoomErrorText:{
        color:'red',
        fontFamily:Fonts.defaultTextFontFamily,
        fontSize:20,
    },
    noRoomErrorContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    

    }
})