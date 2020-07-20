import React, { useState, useEffect } from "react";
import { Dimensions, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View ,BackHandler, Keyboard,Image} from "react-native";
import loginStyles from "../styles/loginStyles";
const window = Dimensions.get('window');

function Login (props) {
  const [keyFocus,setKeyFocus]=useState(true)

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
    props.navigation.navigate("AppStack")
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
          <View
        
        style={{
          height:200,
          backgroundColor:'#100746',
          borderBottomLeftRadius:130,
          borderBottomRightRadius:130
        }}>

        <Image
            style={{
              flex: 1,
              width: 200,
              marginBottom:20,
              alignSelf:'center',
              resizeMode: 'cover',
              borderRadius:8
          }}
            source={{uri:"https://app.imagineradio.io/media/album/art/default.jpg"}}
          />
          </View>
          :<View/>
        }


        <View style={loginStyles.loginContent}>

          {/* title and input starts */}
          <View style={loginStyles.loginEmailTop}>
            <KeyboardAvoidingView>
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
            </KeyboardAvoidingView>
          </View>
          <View style={loginStyles.loginEmailTop}>
            <KeyboardAvoidingView>
              <TextInput
                underlineColorAndroid="#8d8d8d"
                placeholderTextColor="#212121"
                placeholder="Password"
                value={password}
                secureTextEntry={true}
                style={[loginStyles.txtInput,{
                  marginTop:90
                } ]}
                onChangeText={setPassword}
                blurOnSubmit={false}
                />
            </KeyboardAvoidingView>
          </View>
          {/* title and input ends */}
        </View>
        <TouchableOpacity
        style={{
          height:window.height/20,
          width:window.width/2,
          alignSelf:'center',
          backgroundColor:"transparent",
          justifyContent:'center',
          marginBottom:10,
          borderBottomWidth:1,
          borderBottomColor:'grey'
        }}
        onPress={()=>props.navigation.navigate("Signup")}
        >
          <Text
          style={{
            fontSize:10,
            color:'#100746',
            alignSelf:'center',
            fontWeight:'bold'
          }}
          >
            Signup
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={{
          height:window.height/8,
          width:window.width,
          backgroundColor:"#313E55",
          justifyContent:'center'
        }}
        onPress={()=>
          props.navigation.navigate("AppStack")
      }
        >
          <Text
          style={{
            fontSize:35,
            color:'white',
            alignSelf:'center'
          }}
          >
            Login
          </Text>
        </TouchableOpacity>
        
      </View>
    );
  }
  export default Login