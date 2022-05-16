import React,{useState} from 'react';
import { Text,View,TouchableWithoutFeedback } from 'react-native';
import styles from './LoginPage.style';
import InputBox from '../../Components/InputBox';
import Button from '../../Components/Button';
import { Formik } from 'formik';
import auth from '@react-native-firebase/auth';
import { showMessage } from "react-native-flash-message";
import authErrorsMessageParser from '../../Utils/authErrorsMessageParser';
import Fonts from '../../Styles/Fonts';
const initialFormValues={
    userMail:'',
    password:'',
}
const LoginPage=({navigation})=>{
    const [loading,setLoading]=useState(false);
    async function handleLogin(formValues){
        try {
            setLoading(true);
            await auth().signInWithEmailAndPassword(formValues.userMail,formValues.password); 
            setLoading(false);
            navigation.navigate('RoomsPage');
        } catch (error) {
            setLoading(false);
            showMessage({
                message: authErrorsMessageParser(error.code),
                type: "danger",
                titleStyle:{fontFamily:Fonts.defaultTextFontFamily},
              });
        }
    }
    return(
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={styles.welcomeText}>Welcome CodeTalks!</Text>
                <Text style={styles.loginText}>Login</Text>
                <View style={styles.inputContainer}>
                    <Formik initialValues={initialFormValues} onSubmit={handleLogin}>
                        {({values,handleChange,handleSubmit})=>
                        <>
                            <InputBox onType={handleChange('userMail')} value={values.userMail} placeholder='E-Mail' iconName='account-outline'></InputBox>
                            <InputBox onType={handleChange('password')} value={values.password} placeholder='Password' iconName='lock-outline' isPassword={true}></InputBox>
                            <Button buttonPlaceholder='Login' onPress={handleSubmit} loading={loading}></Button>
                        </>
                        }
                    </Formik>
                </View>
                
                <View style={styles.registerTextContainer}>
                    <Text style={styles.dontHaveAccountText}>Don't have an account?</Text>
                   <TouchableWithoutFeedback onPress={()=>navigation.navigate("RegisterPage")}><Text style={styles.newAccountText}> Create a new account</Text></TouchableWithoutFeedback> 
                </View>
            </View>
            
        </View>
    )
}
export default LoginPage;