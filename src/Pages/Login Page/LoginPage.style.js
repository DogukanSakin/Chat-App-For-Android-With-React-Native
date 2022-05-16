import { StyleSheet } from 'react-native';
import Colors from '../../Styles/Colors';
import Fonts from '../../Styles/Fonts';
export default StyleSheet.create({
   container:{
       backgroundColor:Colors.backgroundColor,
       flex:1,
        padding:10,
       justifyContent: 'center',
   } ,
   welcomeText:{
       color:'white',
       fontSize:35,
       fontFamily:Fonts.defaultTextFontFamily,
       marginBottom:10
   },
   innerContainer:{
    padding:10
   },
   loginText:{
       color:'white',
       fontSize:25,
       fontFamily:Fonts.defaultTextFontFamily
   },
   inputContainer:{
       marginTop:15
   },
   registerTextContainer:{
       flexDirection:'row',
       padding:15,
       justifyContent:'center'
   },
   dontHaveAccountText:{
    color:'white',
    fontSize:17,
    fontFamily:Fonts.defaultTextFontFamily,
    marginHorizontal:10
   },
   newAccountText:{
    fontSize:17,
    fontFamily:Fonts.defaultTextFontFamily,
    color:'#41cd7d'

   }

})