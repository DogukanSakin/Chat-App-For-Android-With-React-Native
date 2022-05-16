import { StyleSheet,Dimensions } from 'react-native';
import Fonts from '../../../Styles/Fonts';
import Colors from '../../../Styles/Colors';
const deviceSize=Dimensions.get('window')
export default StyleSheet.create({
    container:{
        backgroundColor:Colors.defaultComponentDarkColor,
        padding:10,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    },
    modal:{
        justifyContent:'flex-end',
        margin:0,
      
    },
    createRoomText:{
        color:'white',
        fontSize:17,
        fontFamily:Fonts.defaultTextFontFamily
    },
    createRoomInput:{
        color:'white',
        fontFamily:Fonts.defaultTextFontFamily,
        
        
    
    },
    createRoomInputContainer:{
        borderBottomWidth:0.5,
        borderColor:'white',
        marginTop:10,
        marginBottom:15,

    }

})