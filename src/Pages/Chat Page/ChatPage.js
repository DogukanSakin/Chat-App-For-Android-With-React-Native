import React,{useState,useEffect} from 'react';
import { Text,View,FlatList } from 'react-native';
import MessageCard from '../../Components/MessageCard/MessageCard';
import InputBox from '../../Components/InputBox';
import styles from './ChatPage.style';
import parseContentData from '../../Utils/parseContentData';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
const ChatPage=({route})=>{
    const user = auth().currentUser;
    const {roomID}=route.params;
    const [message,setMessage]=useState('');
    const [messageList,setMessageList]=useState([]);
    const [messagesIsEmpty,setMessagesIsEmpty]=useState(false);
    const renderMessages=({item})=><MessageCard message={item}></MessageCard>
    useEffect(()=>{
        database().ref(`rooms/${roomID}/roomMessages/`).on('value', snapshot => {
            const contentData=snapshot.val();
            if(contentData!==null){
                const parsedData=parseContentData(contentData);
                setMessageList(parsedData);
                setMessagesIsEmpty(false);
            }
            else{
                setMessagesIsEmpty(true);     
            }
            
        });
    },[]);
    
    function handleSendMessage(content){
        const contentObj={
            message:content,
            author:user.email.split('@')[0],
            date:(new Date()).toISOString(),
        }
        database().ref(`rooms/${roomID}/roomMessages/`).push(contentObj);
        setMessagesIsEmpty(false);
        setMessage('');
    }
    return(
        <View style={styles.container}>
            {messagesIsEmpty ? <View style={styles.noMessageErrorContainer}><Text style={styles.noMessageErrorText}>There is no a message in the room!</Text></View> :<FlatList
            data={messageList}
            renderItem={renderMessages}></FlatList>}
            <View style={styles.messageInputContainer}>
                <View style={styles.messageInputInnerContainer}>
                    <InputBox placeholder='Message...' multiline={true} isChatInput={true} onPress={()=>handleSendMessage(message)} onType={(text)=>setMessage(text)}></InputBox>
                    
                </View>
                
                
            </View>
            
        </View>
    )
}
export default ChatPage;