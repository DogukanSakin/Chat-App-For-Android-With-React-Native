import React,{useState,useEffect} from 'react';
import { Text,View,FlatList } from 'react-native';
import styles from './RoomsPage.style';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import RoomCard from '../../Components/RoomCard';
import FloatingButton from '../../Components/FloatingButton';
import CreateRoomModal from '../../Components/Modal/CreateRoomModal';
import database from '@react-native-firebase/database';
import parseContentData from '../../Utils/parseContentData';
const RoomsPage=({navigation})=>{
    const user = auth().currentUser;
    const [inputModalVisible,setInputModalVisible]=useState(false);
    const [roomList,setRoomList]=useState([]);
    const [roomListEmpty,setRoomListEmpty]=useState(false);
    const renderRoomList=({item})=><RoomCard room={item} onPress={()=>handleGoChatRoom(item.id)} onLongPress={()=>handleDeleteChatRoom(item.id)}></RoomCard>
    useEffect(()=>{
        database().ref('rooms/').on('value', snapshot => {
            const contentData=snapshot.val();
            if(contentData!==null){
                const parsedData=parseContentData(contentData);
                setRoomList(parsedData);
                setRoomListEmpty(false);
            }
            else{
                setRoomListEmpty(true);      
            }
            
        });
    },[]);
    
    function handleSignOut(){
        auth().signOut().then(navigation.navigate("LoginPage"));
    }
    function handleOnModalToggle(){
        setInputModalVisible(!inputModalVisible);
    }
    function handleCreateARoom(content){
        handleOnModalToggle();
        sendContent(content);
    }
    function sendContent(content){
        const contentObj={
            roomName:content,
            creatorName:user.email.split('@')[0],
            roomMessages:null,
        }
        database().ref('rooms/').push(contentObj);
        setRoomListEmpty(false);
    }
    function handleGoChatRoom(roomID){
        navigation.navigate("ChatPage",{roomID});
    }
    async function handleDeleteChatRoom(roomID){
        await database().ref(`rooms/${roomID}`).remove();
    }
    return(
        <View style={styles.container}>
            
            
            <CreateRoomModal visible={inputModalVisible} onClose={handleOnModalToggle} onCreateRoom={handleCreateARoom}></CreateRoomModal>
            <View style={styles.userWelcomeContainer}>
                <Text style={styles.userWelcomeText}>Welcome CodeTalks </Text>
                <Text style={styles.userText}>{user.email.split('@')[0]}!</Text>
                <Icon name="logout" size={25} color='white' onPress={handleSignOut}></Icon>
            </View>
            {roomListEmpty ? <View style={styles.noRoomErrorContainer}><Text style={styles.noRoomErrorText}>There is no created a room!</Text></View> : 
            <FlatList
            data={roomList}
            renderItem={renderRoomList}
            horizontal={true}>
            </FlatList>}
            <FloatingButton iconName='plus' onPress={handleOnModalToggle}></FloatingButton>
            
           
        </View>
    )
}
export default RoomsPage;