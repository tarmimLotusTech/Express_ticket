import React, { useState, useEffect } from 'react';
import {
    View,
    TextInput,
    Dimensions,
    StatusBar,
    Text,
    TouchableOpacity,
    KeyboardAvoidingView,
    Keyboard,
    Modal,
    Image
} from 'react-native';
import FetchService from '../services/FetchService';
import iconAdded from '../assets/icons/iconAdded.png';

const window = Dimensions.get('window');
const ChangePassword: () => React$Node = (props) => {
  const [ errorText,setErrorText] = useState('')
  const [keyFocus,setKeyFocus]=useState(true)
  const [ password, setpassword ] = useState('')
  const [ newPassword, setnewPassword ] = useState('')
  const [modalVisible, setModalVisible] = useState(false);


  const _keyboardDidShow = () => {
    setKeyFocus(true)
  };

  const _keyboardDidHide = () => {
    setKeyFocus(false)
  };
  useEffect(()=>{
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);
    return () => {
      Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
      Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
    }
  },[])
  function handleValidate(){
    let body={
      password,
      newPassword,
      newPassword2:newPassword
    }
    FetchService(props.navigation,"POST","/customer/api/profile/changePassword",1,body,false)
    .then(res=>{
      console.log(res)
      if(res.success){
        setModalVisible(true)
        setTimeout(()=>{
          setModalVisible(false)
          props.navigation.navigate("Profile")
        },2000)
      }
      else{
        setErrorText(Object.values(res)[0])
      }
    })
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
        >
          <View
          style={{
            alignSelf:'center',
            backgroundColor: "#F3F3F3",
            borderRadius: 20,
            padding: 35,
            alignItems: "center",
            shadowColor: "#000",
            marginTop:window.height/2.7,
            shadowOffset: {
              width: 0,
              height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5
          }}
          >
            <Image
              style={{
                width: window.height / 10,
                height: window.height / 10,
                marginBottom:10
              }}
              source={iconAdded}
            />
            <Text
            style={{
              marginBottom: 15,
              textAlign: "center"
            }}
            >
            Password changed</Text>
          </View>
          
        </Modal>
      <View
      style={{
          height:window.height,
          width:window.width,
          alignItems:'center',
          backgroundColor:'white'
        }}
      >
        {
          !keyFocus?<View
          style={{
            height:window.height/5
          }}
          />:<View/>
        }
        <KeyboardAvoidingView
          style={{
            alignSelf:'center',
            backgroundColor: "#F3F3F3",
            borderRadius: 20,
            padding: 35,
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5
          }}
          ><Text
          style={{
            color:'red',
          }}
          >{errorText}</Text>
            <Text
            style={{
              color:'#333',
              alignSelf:'flex-start',
              fontSize:20
            }}
            >Edit Password
            </Text>
            <TextInput
              placeholderTextColor="#212121"
              placeholder={
                "Old password"
              }
              value={password}
              autoFocus={true}
              style={[ {
                color: '#333',
                width: window.width*305/375,
                height: window.height/14,
                fontSize: 12,
                paddingLeft: window.width*25/375,
                marginBottom: 10,
                borderRadius:5,
                borderColor:'#666',
                borderWidth:1,
              },{
                  marginTop:5
                } ]}
              onChangeText={setpassword}
              blurOnSubmit={false}
              />
              <TextInput
              placeholderTextColor="#212121"
              placeholder={
                "New password"
              }
              value={newPassword}
              style={[ {
                color: '#333',
                width: window.width*305/375,
                height: window.height/14,
                fontSize: 12,
                paddingLeft: window.width*25/375,
                marginBottom: 30,
                borderRadius:5,
                borderColor:'#666',
                borderWidth:1,
              } ]}
              onChangeText={setnewPassword}
              blurOnSubmit={false}
              />
              <TouchableOpacity
                style={{
                  height:window.height/15,
                  width:window.width/2.5,
                  borderRadius:5,
                  backgroundColor:"grey",
                  justifyContent:'center',
                  marginBottom:10,
                  borderWidth:1,
                  borderColor:"#ccc"
                }}
                onPress={handleValidate}
                >
                  <Text
                  style={{
                    fontSize:15,
                    color:'black',
                    alignSelf:'center'
                  }}
                  >
                    {
                    "Change Password"
                  }
                  </Text>
                </TouchableOpacity>
            
          </KeyboardAvoidingView>
      </View>
    </>
  );
};

export default ChangePassword;
