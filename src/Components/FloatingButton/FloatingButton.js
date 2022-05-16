import React from 'react';
import { View,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './FloatingButton.style';
const FloatingButton=({iconName,onPress})=>{
    return(
        <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
            <Icon name={iconName} size={30} color='white'></Icon>
        </TouchableOpacity>
    )
}
export default FloatingButton;