import React from 'react';
import { Text,View,TouchableOpacity } from 'react-native';
import styles from './RoomCard.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const RoomCard = ({room,onPress,onLongPress})=>{
    return(
        <TouchableOpacity onPress={onPress} onLongPress={onLongPress}>
        <View style={styles.container}>
            <Icon name="chat" size={15} color='white'></Icon>
            <Text style={styles.roomNameText}>{room.roomName}</Text>
            
        </View>
        </TouchableOpacity>
    )
}
export default RoomCard;