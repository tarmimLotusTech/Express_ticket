import React, { useState, useEffect } from "react";
import { Dimensions, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View ,BackHandler, Keyboard, ScrollView, Image} from "react-native";
import loginStyles from "../styles/loginStyles";
const window = Dimensions.get('window');

function Login (props) {
  const [keyFocus,setKeyFocus]=useState(true)
  
  const [fName,setFName]=useState('')
  const [lName,setLName]=useState('')
  const [country,setCountry]=useState('')
  const [city,setCity]=useState('')
  const [address1,setAddress1]=useState('')
  const [address2,setAddress2]=useState('')
  const [phone,setPhone]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [password2,setPassword2]=useState('')
  const [signupError, setSignupError]=useState('')
  
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
    props.navigation.navigate("AppStack")
  }
    return (
      <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={loginStyles.loginCont}
      >
        
        {
          !keyFocus?
          <View
        
        style={{
          height:120,
          backgroundColor:'#100746',
          borderBottomLeftRadius:130,
          borderBottomRightRadius:130
        }}>

          <Image
              style={{
                flex: 1,
                width: 150,
                height: 100,
                alignSelf:'center',
                resizeMode: 'cover',
                borderRadius:8
            }}
              source={{uri:"https://app.imagineradio.io/media/album/art/default.jpg"}}
            />
        </View>
        
        :<View/>
        }
          <View
          style={{
            height:window.height/10,
            width:window.width-50,
            alignItems:'center',
            alignSelf:'center',
            justifyContent:'center'
          }}
          >
          {/* title and input starts */}
          <Text
          style={{
            color:'red'
          }}>
            {signupError}
          </Text>
          <Text
          style={{
            color:'#100746',
            fontSize:20,
            alignSelf:'flex-start',
            marginLeft:10
          }}
          >
            Registration form
          </Text>
          </View>
          <View style={loginStyles.signupEmailTop}>
            <KeyboardAvoidingView
            style={{
              flexDirection:'row'
            }}
            >
              <TextInput
                underlineColorAndroid="#8d8d8d"
                placeholderTextColor="#212121"
                placeholder="First name"
                value={fName}
                keyboardType="default"
                style={[loginStyles.txtInputSignup,{
                  width: window.width*150/375,
                }]}
                onChangeText={setFName}
                blurOnSubmit={false}

                />
                <TextInput
                underlineColorAndroid="#8d8d8d"
                placeholderTextColor="#212121"
                placeholder="Last name"
                value={lName}
                keyboardType="default"
                style={[loginStyles.txtInputSignup,{
                  width: window.width*150/375,
                }]}
                onChangeText={setLName}
                blurOnSubmit={false}

                />
            </KeyboardAvoidingView>
            <KeyboardAvoidingView
            style={{
              flexDirection:'row'
            }}
            >
              <TextInput
                underlineColorAndroid="#8d8d8d"
                placeholderTextColor="#212121"
                placeholder="Country"
                value={country}
                keyboardType="default"
                style={[loginStyles.txtInputSignup,{
                  width: window.width*150/375,

                }]}
                onChangeText={setCountry}
                blurOnSubmit={false}

                />
                <TextInput
                underlineColorAndroid="#8d8d8d"
                placeholderTextColor="#212121"
                placeholder="City"
                value={city}
                keyboardType="default"
                style={[loginStyles.txtInputSignup,{
                  width: window.width*150/375,

                }]}
                onChangeText={setCity}
                blurOnSubmit={false}

                />
            </KeyboardAvoidingView>
            <KeyboardAvoidingView>
              <TextInput
                underlineColorAndroid="#8d8d8d"
                placeholderTextColor="#212121"
                placeholder="Address line 1"
                value={address1}
                keyboardType="default"
                style={loginStyles.txtInputSignup}
                onChangeText={setAddress1}
                blurOnSubmit={false}

                />
            </KeyboardAvoidingView>
            <KeyboardAvoidingView>
              <TextInput
                underlineColorAndroid="#8d8d8d"
                placeholderTextColor="#212121"
                placeholder="Address line 2"
                value={address2}
                style={loginStyles.txtInputSignup}
                onChangeText={setAddress2}
                blurOnSubmit={false}
                />
            </KeyboardAvoidingView>
          
            <Text
            style={{
              color:'#100746',
              fontSize:20,
              alignSelf:'flex-start',
              marginLeft:40,
              marginTop:30
            }}
            > 
            Contact Info
          </Text>
            <KeyboardAvoidingView
            style={{
              flexDirection:'row'
            }}
            >
              <TextInput
                underlineColorAndroid="#8d8d8d"
                placeholderTextColor="#212121"
                placeholder="Phone"
                value={phone}
                keyboardType="default"
                style={[loginStyles.txtInputSignup,{
                  width: window.width*150/375,

                }]}
                onChangeText={setPhone}
                blurOnSubmit={false}

                />
                <TextInput
                underlineColorAndroid="#8d8d8d"
                placeholderTextColor="#212121"
                placeholder="Email"
                value={email}
                keyboardType="default"
                style={[loginStyles.txtInputSignup,{
                  width: window.width*150/375,

                }]}
                onChangeText={setEmail}
                blurOnSubmit={false}

                />
            </KeyboardAvoidingView>
            <KeyboardAvoidingView
            style={{
              flexDirection:'row'
            }}
            >
              <TextInput
                underlineColorAndroid="#8d8d8d"
                placeholderTextColor="#212121"
                placeholder="Password"
                secureTextEntry={true}
                value={password}
                keyboardType="default"
                style={[loginStyles.txtInputSignup,{
                  width: window.width*150/375,

                }]}
                onChangeText={setPassword}
                blurOnSubmit={false}

                />
                <TextInput
                underlineColorAndroid="#8d8d8d"
                placeholderTextColor="#212121"
                placeholder="Confirm Password"
                secureTextEntry={true}
                value={password2}
                keyboardType="default"
                style={[loginStyles.txtInputSignup,{
                  width: window.width*150/375,

                }]}
                onChangeText={setPassword2}
                blurOnSubmit={false}

                />
            </KeyboardAvoidingView>
          </View>
          {/* title and input ends */}
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
        onPress={()=>props.navigation.navigate("Login")}
        >
          <Text
          style={{
            fontSize:10,
            color:'#100746',
            alignSelf:'center',
            fontWeight:'bold'
          }}
          >
            Already have account? Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={{
          height:window.height/8,
          width:window.width,
          backgroundColor:"#313E55",
          justifyContent:'center'
        }}
        onPress={()=>props.navigation.navigate("AppStack")}
        >
          <Text
          style={{
            fontSize:35,
            color:'white',
            alignSelf:'center'
          }}
          >
            Signup
          </Text>
        </TouchableOpacity>
        
      </ScrollView>
    );
  }
  export default Login