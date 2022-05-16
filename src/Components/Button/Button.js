import React from 'react';
import { Text,View,TouchableOpacity,ActivityIndicator } from 'react-native';
import styles from './Button.style';
const Button = ({buttonPlaceholder,onPress,loading})=>{
    return(
        <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
            {loading ? <ActivityIndicator size={35} color='white'></ActivityIndicator> : <Text style={styles.buttonText}>{buttonPlaceholder}</Text>}
            
        </TouchableOpacity>
    )
}
export default Button;