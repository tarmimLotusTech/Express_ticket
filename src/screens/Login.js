import React, { useState, useEffect } from "react";
import { ImageBackground, Dimensions, Text, TextInput, TouchableOpacity, View ,BackHandler, Keyboard} from "react-native";
import loginStyles from "../styles/loginStyles";
import FetchService from "../services/FetchService";
import FastImage from "react-native-fast-image";

import { 
  systemWeights
} from 'react-native-typography';

const window = Dimensions.get('window');

function Login (props) {
  const [keyFocus,setKeyFocus]=useState(true)
  const [signupError, setSignupError]=useState('')

  const[password,setPassword]=useState('')
  const [username,setName]=useState('')
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

  function handleSubmit() {

    if (username.length<1){
      setSignupError('insert email or username')
    }
    else if (password.length<1){
      setSignupError('insert password')
    }
    else if (password.length<3){
      setSignupError('password at least 3 characters')
    }
    else{
      let body={
        username,password
      }
      FetchService("POST","/customer/auth/login",3,body)
      .then(res=>{
        if(res.success){
          props.navigation.navigate("AppStack")
        }
        else throw Object.entries(res)[0][1]
      })
      .catch(er=>setSignupError(er))
    }
  }
    return (
      <View style={loginStyles.loginCont}>

        {
          !keyFocus?
          <View>
          <View
            style={{
              height:window.height/4,
              backgroundColor:'#130A56',
              borderBottomLeftRadius:window.width/12,
              borderBottomRightRadius:window.width/12
            }}>

          <FastImage
            style={{
              flex: 1,
              width: 150,
              height: 150,
              marginBottom:20,
              alignSelf:'center',
              resizeMode:'contain',
              borderRadius:8
          }}
            source={require("../assets/images/loginTop.png")}
          />
          </View>
          <Text
          style={{
            color:'black',
            fontSize:30,
            alignSelf:'flex-start',
            alignSelf:'center',
            marginTop:30,
            fontWeight:'bold',
          }}>
            Express 
            <Text
            style={{
              color:'#FDDF68'
            }}
            > Ticket</Text>
            
          </Text></View>
          :<View/>
        }
        <ImageBackground
        source={require('../assets/images/loginBG.png')}
        style={{
          flex: 1,
        }}
        imageStyle={{
          resizeMode:'contain',
          height:450,
          width:300,
          marginLeft:100,
          marginTop:50,
          opacity:0.5
        }}
        >
        <Text
          style={{
            color:'red',
            alignSelf:'flex-start',
            alignSelf:'center',
            marginTop:10,
            marginBottom:-40
  
          }}>
            {signupError}
          </Text>

        <View style={loginStyles.loginContent}>

          {/* title and input starts */}
          <View style={{
            width: window.width,
            height: window.height*200/667,
            justifyContent: 'space-around',
            alignItems: 'center',
            alignSelf: 'center'
          }}>
              <TextInput
                // underlineColorAndroid="#8d8d8d"
                placeholderTextColor="#212121"
                placeholder="Email or username"
                autoFocus={true}
                value={username}
                keyboardType="email-address"
                style={ {
                  ...systemWeights.light,
                  color: '#616161',
                  width: window.width*305/375,
                  height: window.width*56/375,
                  fontSize: 16,
                  paddingLeft: window.width*25/375,
                  marginTop: 70,
                  borderWidth:1,
                  borderRadius:5
                }}
                onChangeText={setName}
                blurOnSubmit={false}

                />
              <TextInput
                // underlineColorAndroid="#8d8d8d"
                placeholderTextColor="#212121"
                placeholder="Password"
                value={password}
                secureTextEntry={true}
                style={[ {
                ...systemWeights.light,
                color: '#616161',
                width: window.width*305/375,
                height: window.width*56/375,
                fontSize: 16,
                paddingLeft: window.width*25/375,
                marginBottom: 30,
                borderWidth:1,
                borderRadius:5
              },{
                  marginTop:40
                } ]}
                onChangeText={setPassword}
                blurOnSubmit={false}
                />
          </View>
          {/* title and input ends */}
        </View>
        </ImageBackground>
        <View
        style={{
          margin:15,
          justifyContent:'space-between',
          width:window.width/2,
          alignItems:'center'
        }}
        >
        <TouchableOpacity
        style={{
          height:window.height/20,
          width:window.width/2.5,
          alignSelf:'flex-start',
          backgroundColor:"transparent",
          justifyContent:'center',
          marginBottom:20
        }}
        onPress={()=>props.navigation.navigate("Signup")}
        >
          <Text
          style={{
            fontSize:15,
            color:'#00163D',
            alignSelf:'center',
            fontWeight:'bold'
          }}
          >
            Create Account
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={{
          height:window.height/15,
          width:window.width/2.5,
          borderRadius:5,
          backgroundColor:"#130A56",
          justifyContent:'center',
          marginBottom:10
        }}
        onPress={handleSubmit}
        >
          <Text
          style={{
            fontSize:15,
            color:'white',
            alignSelf:'center'
          }}
          >
            Login
          </Text>
        </TouchableOpacity>
        
        </View>
      </View>
    );
  }
  export default Login