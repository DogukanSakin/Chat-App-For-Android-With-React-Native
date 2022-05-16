import { StyleSheet } from 'react-native';
import Colors from '../../Styles/Colors';
import Fonts from '../../Styles/Fonts';
export default StyleSheet.create({
    container:{
        backgroundColor:Colors.defaultComponentDarkColor,
        borderRadius:10,
        padding:10,
        marginBottom:10
    },
    messageText:{
        color:'white',
        fontSize:15,
        fontFamily:Fonts.defaultTextFontFamily,
        paddingTop:10
    },
    authorContainer:{
        borderBottomWidth:0.5,
        borderColor:'white',
        flexDirection:'row'
    },
    authorText:{
        fontSize:15,
        color:Colors.defaultComponentGreenColor,
        paddingBottom:5
    },
    messageTimeText:{
        fontSize:15,
        color:Colors.defaultComponentGreenColor,
        paddingBottom:5,

    },
    authorInnerContainer:{
        flex:1
    }
})