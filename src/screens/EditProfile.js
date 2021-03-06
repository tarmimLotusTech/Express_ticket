import React, { useState, useEffect } from "react";
import { ImageBackground,Dimensions, Text, TextInput, TouchableOpacity, View ,BackHandler, Keyboard, ScrollView} from "react-native";
import loginStyles from "../styles/loginStyles";
const window = Dimensions.get('window');
import FastImage from "react-native-fast-image";
import AsyncStorage from '@react-native-community/async-storage';
import FetchService from '../services/FetchService';

function EditProfile ({navigation}) {
  function getProduct(){
    AsyncStorage.getItem('userToken')
    .then(sesToken=>{
      if (sesToken){
        FetchService("GET","/customer/api/profile")
        .then(response=>{
          setFName(response.firstName)
          setLName(response.lastName)
          setCountry(response.country)
          setCity(response.city)
          setAddress1(response.address1)
          setAddress2(response.address2)
          setPhone(response.phone)
          setEmail(response.email)
        })
        .catch(err=>console.log(err))
      }
      else {
        navigation.navigate("AuthStack")
      }
    })
  }
  useEffect(()=>{
    const unsubscribe = navigation.addListener('focus',getProduct)
    return unsubscribe;
  },[navigation])
  const [keyFocus,setKeyFocus]=useState(false)
  
  const [firstName,setFName]=useState('')
  const [lastName,setLName]=useState('')
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

    if (firstName.length<1){
      setSignupError('insert first name')
    }
    else if (lastName.length<1){
      setSignupError('insert last name')
    }
    else if (country.length<1){
      setSignupError('insert country')
    }
    else if (city.length<1){
      setSignupError('insert city')
    }
    else if (address1.length<1 && address2.length<1){
      setSignupError('insert address')
    }
    else if (phone.length<1){
      setSignupError('insert phone number')
    }
    // else if (email.length<1){
    //   setSignupError('insert email')
    // }
    // else if (password.length<1){
    //   setSignupError('insert password')
    // }
    // else if (password.length<8){
    //   setSignupError('password at least 8 characters')
    // }
    // else if (password!==password2){
    //   setSignupError('passwords do not match')
    // }
    else{
      let body={
        firstName,lastName,country:country.name,city:city.name,address1,address2,phone,email
      }
      FetchService("POST","/customer/api/profile/update",3,body)
      .then(res=>{
        if(res.success){
          navigation.navigate("Profile")
        }
        else setSignupError(Object.entries(res)[0][0]+" : "+Object.entries(res)[0][1])
      })
    }

  }
    return (
      <View
      style={loginStyles.loginCont}
      >
        {
          !keyFocus?
          <View
        
        style={{
          marginBottom:0,
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
              marginBottom:0,
              alignSelf:'center',
              resizeMode:'contain',
              borderRadius:8
          }}
            source={require("../assets/images/loginTop.png")}
          />
          
        </View>
        
        :<View/>
        }
        <Text
          style={{
            color:'red', 
            alignSelf:'center',
            marginTop:10
          }}>
            {signupError}
          </Text>
      <ImageBackground
        source={require('../assets/images/loginBG.png')}
        style={{
          flex: 1,
        }}
        imageStyle={{
          resizeMode:'contain',
          height:350,
          width:300,
          marginLeft:130,
          marginTop:100,
          opacity:0.5
        }}
        >
      <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      >
        
        
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
            color:'#00163D',
            fontSize:20,
            alignSelf:'flex-start',
            marginLeft:10
          }}
          >
            Basic Information
          </Text>
          </View>
          <View style={loginStyles.signupEmailTop}>
            <View
            style={{
              flexDirection:'row'
            }}
            >
              <TextInput
                underlineColorAndroid="#8d8d8d"
                placeholderTextColor="#212121"
                placeholder="First name"
                value={firstName}
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
                value={lastName}
                keyboardType="default"
                style={[loginStyles.txtInputSignup,{
                  width: window.width*150/375,
                }]}
                onChangeText={setLName}
                blurOnSubmit={false}

                />
            </View>
            <View
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
            </View>
            <View>
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
            </View>
            <View>
              <TextInput
                underlineColorAndroid="#8d8d8d"
                placeholderTextColor="#212121"
                placeholder="Address line 2"
                value={address2}
                style={loginStyles.txtInputSignup}
                onChangeText={setAddress2}
                blurOnSubmit={false}
                />
            </View>
          
            <Text
            style={{
              color:'#00163D',
              fontSize:20,
              alignSelf:'flex-start',
              marginLeft:40,
              marginVertical:10
            }}
            > 
            Contact Info
          </Text>
            <View
            style={{
              flexDirection:'row'
            }}
            >
              <TextInput
                underlineColorAndroid="#8d8d8d"
                placeholderTextColor="#212121"
                placeholder="Phone"
                value={phone}
                keyboardType='phone-pad'
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
                keyboardType='email-address'
                style={[loginStyles.txtInputSignup,{
                  width: window.width*150/375,

                }]}
                onChangeText={setEmail}
                blurOnSubmit={false}

                />
            </View>
            {/* <View
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
                style={{
                  ...systemWeights.light,
                  color: '#616161',
                  width: window.width*150/375,
                  height: window.width*56/375,
                  fontSize: 16,
                  marginVertical: 10
                }}
                onChangeText={setPassword2}
                blurOnSubmit={false}

                />
            </View> */}
          </View>
          {/* title and input ends */}
          <View
            style={{
              flexDirection:'row',
              margin:15,
              justifyContent:'center'
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
            Update
          </Text>
        </TouchableOpacity>
        </View>
        </ScrollView>
        </ImageBackground>
        
      </View>
    );
  }
  export default EditProfile