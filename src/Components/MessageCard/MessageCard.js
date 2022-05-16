import React from 'react';
import { Text,View } from 'react-native';
import styles from './MessageCard.style';
import { formatDistance,parseISO } from 'date-fns'
const MessageCard=({message})=>{
    const formattedDate= formatDistance(parseISO(message.date), new Date(), { addSuffix: true });
    return(
    <View style={styles.container}>
        <View style={styles.authorContainer}>
             <View style={styles.authorInnerContainer}>
                <Text style={styles.authorText}>{message.author}</Text>
            </View>
            <Text style={styles.messageTimeText}>{formattedDate}</Text>
        </View>
        <Text style={styles.messageText}>{message.message}</Text>
    </View>
    )
}
export default MessageCard;