import { Formik } from 'formik';
import React,{useState} from 'react';
import { Text,View } from 'react-native';
import Button from '../../Components/Button';
import InputBox from '../../Components/InputBox';
import styles from './RegisterPage.style';
import authErrorsMessageParser from '../../Utils/authErrorsMessageParser';
import Fonts from '../../Styles/Fonts';
import auth from '@react-native-firebase/auth';
import { showMessage } from "react-native-flash-message";
const initialFormValues={
    userMail:'',
    password:'',
    repassword:'',
}
const RegisterPage=({navigation})=>{
    const [loading,setLoading]=useState(false);
    async function handleRegister(formValues){
        if(formValues.password!==formValues.repassword){
            showMessage({
                message: "The entered passwords do not match.",
                type: "danger",
                titleStyle:{fontFamily:Fonts.defaultTextFontFamily},
              });
        }
        else{
            try {
                setLoading(true);
                await auth().createUserWithEmailAndPassword(formValues.userMail,formValues.password);
                setLoading(false);
                showMessage({
                    message: "The user has been successfully created.",
                    type: "success",
                    titleStyle:{fontFamily:Fonts.defaultTextFontFamily},
                  });
                  navigation.navigate("LoginPage");
            } catch (error) {
                showMessage({
                    message: authErrorsMessageParser(error.code),
                    type: "danger",
                    titleStyle:{fontFamily:Fonts.defaultTextFontFamily},
                  });
                  setLoading(false);
            }

        }
        
    }

    return(
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={styles.titleText}>Are you ready to talk?</Text>
                <Text style={styles.joinUsText}>Register and join us!</Text>
                <View style={styles.registerContainer}>
                    <Formik initialValues={initialFormValues} onSubmit={handleRegister}>
                        {({values,handleChange,handleSubmit})=>
                        <>
                            <InputBox onType={handleChange('userMail')} value={values.userMail} iconName='account-outline' placeholder='E-mail'></InputBox>
                            <InputBox onType={handleChange('password')} value={values.password} iconName='lock-outline' placeholder='Password' isPassword={true}></InputBox>
                            <InputBox onType={handleChange('repassword')} value={values.repassword} iconName='lock-outline' placeholder='Re-password' isPassword={true}></InputBox>
                            <Button buttonPlaceholder='Register' onPress={handleSubmit} loading={loading}></Button>
                        </>
                        }
                    </Formik>
                </View>
                
            </View>
            
        </View>
    )
}
export default RegisterPage;