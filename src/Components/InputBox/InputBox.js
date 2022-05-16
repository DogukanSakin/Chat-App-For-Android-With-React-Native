import React from 'react';
import { View,TextInput } from 'react-native';
import styles from './InputBox.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const InputBox=({placeholder,iconName,isPassword,value,onType,multiline,isChatInput,onPress})=>{
    return(
        <View style={styles.container}>
            <Icon name={iconName} size={25} color='white'></Icon>
            <TextInput multiline={multiline} onChangeText={onType} value={value} placeholder={placeholder} style={styles.inputBoxContainer} placeholderTextColor='white' secureTextEntry={isPassword}></TextInput>
            {isChatInput&&<Icon name='send-circle' size={35} color='white' onPress={onPress}></Icon>}
            
        </View>
    )
}
export default InputBox;