import React, { useState, useEffect } from "react";
import { ImageBackground, Dimensions, Text, TextInput, TouchableOpacity, View ,BackHandler, Keyboard,Image} from "react-native";
import loginStyles from "../styles/loginStyles";
const window = Dimensions.get('window');

function Login (props) {
  const [keyFocus,setKeyFocus]=useState(true)
  const [signupError, setSignupError]=useState('')

  const[password,setPassword]=useState('')
  const [name,setName]=useState('')
  const _keyboardDidShow = () => {
    setKeyFocus(true)
  };

  const _keyboardDidHide = () => {
    setKeyFocus(false)
  };
  useEffect(()=>{

    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);


    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      ()=>BackHandler.exitApp()
    );

    return () => {
      backHandler.remove();
      Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
      Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
    }
  },[])

  function handleSubmit() {

    if (name.length<1){
      setSignupError('insert email or username')
    }
    else if (password.length<1){
      setSignupError('insert password')
    }
    else if (password.length<8){
      setSignupError('password at least 8 characters')
    }
    else{
      props.navigation.navigate("AppStack")
    }
  }
    return (
      <View style={loginStyles.loginCont}>
        {/* background image starts */}
          {/* <Image
            style={loginStyles.loginBG}
            source={require("../res/img/pixabay_logo.png")}
          /> */}
        {/* background image ends */}

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

        <Image
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
          <View style={loginStyles.loginEmailTop}>
              <TextInput
                underlineColorAndroid="#8d8d8d"
                placeholderTextColor="#212121"
                placeholder="Email or username"
                autoFocus={true}
                value={name}
                keyboardType="default"
                style={loginStyles.txtInput}
                onChangeText={setName}
                blurOnSubmit={false}

                />
          </View>
          <View style={loginStyles.loginEmailTop}>
              <TextInput
                underlineColorAndroid="#8d8d8d"
                placeholderTextColor="#212121"
                placeholder="Password"
                value={password}
                secureTextEntry={true}
                style={[loginStyles.txtInput,{
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
          flexDirection:'row',
          margin:15,
          justifyContent:'space-between'
        }}
        >
        <TouchableOpacity
        style={{
          height:window.height/15,
          width:window.width/2.5,
          borderRadius:5,
          backgroundColor:"#130A56",
          justifyContent:'center'
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
        <TouchableOpacity
        style={{
          height:window.height/20,
          width:window.width/2.5,
          alignSelf:'center',
          backgroundColor:"transparent",
          justifyContent:'center',
          marginBottom:10
        }}
        onPress={()=>props.navigation.navigate("Signup")}
        >
          <Text
          style={{
            fontSize:12,
            color:'#00163D',
            alignSelf:'center',
            fontWeight:'bold'
          }}
          >
            Create Account
          </Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }
  export default Login