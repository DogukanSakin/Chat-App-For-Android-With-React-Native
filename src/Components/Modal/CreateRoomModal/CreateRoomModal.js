import React,{useState} from 'react';
import { Text,View,TextInput } from 'react-native';
import styles from './CreateRoomModal.style';
import Button from '../../Button';
import Modal from 'react-native-modal';
import { showMessage } from "react-native-flash-message";
import Fonts from '../../../Styles/Fonts';
const CreateRoomModal=({visible,onClose,onCreateRoom})=>{
    const [text,setText]=useState(null);
    function handleSendRoomName(){
        if(!text){
          
            showMessage({
                message: "Room name can not be empty!",
                type: "danger",
                titleStyle:{fontFamily:Fonts.defaultTextFontFamily},
              });
        }
        else{
            onCreateRoom(text);
            setText('');
        }

    }
    
    return(
        <Modal backdropOpacity={0} isVisible={visible} onSwipeComplete={onClose} onBackdropPress={onClose} style={styles.modal}>
            <View style={styles.container}>
                <Text style={styles.createRoomText}>Create your chat room</Text>
                <View style={styles.createRoomInputContainer}>
                <TextInput multiline placeholder='Enter room name' onChangeText={setText} style={styles.createRoomInput} placeholderTextColor='white'></TextInput>
                </View>
                
                <Button buttonPlaceholder='Create a Room' onPress={handleSendRoomName}></Button>
            </View>
        </Modal>
    )
}
export default CreateRoomModal;