import React, { useState, useEffect } from "react";
import { ImageBackground,Dimensions, Text, TextInput, TouchableOpacity, View ,StyleSheet, Keyboard, ScrollView, Image, Picker} from "react-native";
import loginStyles from "../styles/loginStyles";
const window = Dimensions.get('window');

import { 
  systemWeights
} from 'react-native-typography';
import FetchService from "../services/FetchService";
const testCities=[
  {
    "_id": "5e8218a9a0be4401500e4d27",
    "objectId": "MEzedNnNVw",
    "code": "AF",
    "name": "Afghanistan",
    "native": "افغانستان",
    "phone": "93",
    "continent": {
        "_id": "5e821761311eb9259c0ba82d",
        "objectId": "mSxk54vkg6",
        "code": "AS",
        "name": "Asia"
    },
    "capital": "Kabul",
    "currency": "AFN",
    "emoji": "🇦🇫",
    "emojiU": "U+1F1E6 U+1F1EB",
    "continentCode": "AS",
    "continentName": "Asia"
},
{
    "_id": "5e8218a9a0be4401500e4d2a",
    "objectId": "8rTBsf4ObQ",
    "code": "AL",
    "name": "Albania",
    "native": "Shqipëria",
    "phone": "355",
    "continent": {
        "_id": "5e821761311eb9259c0ba82e",
        "objectId": "28HX8qDZHw",
        "code": "EU",
        "name": "Europe"
    },
    "capital": "Tirana",
    "currency": "ALL",
    "emoji": "🇦🇱",
    "emojiU": "U+1F1E6 U+1F1F1",
    "continentCode": "EU",
    "continentName": "Europe"
},
{
    "_id": "5e8218a9a0be4401500e4d62",
    "objectId": "8XKDe93BnC",
    "code": "DZ",
    "name": "Algeria",
    "native": "الجزائر",
    "phone": "213",
    "continent": {
        "_id": "5e821761311eb9259c0ba82c",
        "objectId": "X2rEcTJnsE",
        "code": "AF",
        "name": "Africa"
    },
    "capital": "Algiers",
    "currency": "DZD",
    "emoji": "🇩🇿",
    "emojiU": "U+1F1E9 U+1F1FF",
    "continentCode": "AF",
    "continentName": "Africa"
},
{
    "_id": "5e8218a9a0be4401500e4d2f",
    "objectId": "s6ejWUPV5j",
    "code": "AS",
    "name": "American Samoa",
    "native": "American Samoa",
    "phone": "1684",
    "continent": {
        "_id": "5e821761311eb9259c0ba831",
        "objectId": "E6LHZzkHr6",
        "code": "OC",
        "name": "Oceania"
    },
    "capital": "Pago Pago",
    "currency": "USD",
    "emoji": "🇦🇸",
    "emojiU": "U+1F1E6 U+1F1F8",
    "continentCode": "OC",
    "continentName": "Oceania"
},
{
    "_id": "5e8218a9a0be4401500e4d25",
    "objectId": "sv7fjDVISU",
    "code": "AD",
    "name": "Andorra",
    "native": "Andorra",
    "phone": "376",
    "continent": {
        "_id": "5e821761311eb9259c0ba82e",
        "objectId": "28HX8qDZHw",
        "code": "EU",
        "name": "Europe"
    },
    "capital": "Andorra la Vella",
    "currency": "EUR",
    "emoji": "🇦🇩",
    "emojiU": "U+1F1E6 U+1F1E9",
    "continentCode": "EU",
    "continentName": "Europe"
},
{
    "_id": "5e8218a9a0be4401500e4d2c",
    "objectId": "khAszEtDXl",
    "code": "AO",
    "name": "Angola",
    "native": "Angola",
    "phone": "244",
    "continent": {
        "_id": "5e821761311eb9259c0ba82c",
        "objectId": "X2rEcTJnsE",
        "code": "AF",
        "name": "Africa"
    },
    "capital": "Luanda",
    "currency": "AOA",
    "emoji": "🇦🇴",
    "emojiU": "U+1F1E6 U+1F1F4",
    "continentCode": "AF",
    "continentName": "Africa"
}
]

function Login (props) {
  const [keyFocus,setKeyFocus]=useState(false)
  
  const [countries, setCountries]=useState('')
  const [cities, setCities]=useState('')
  const [cityLoading, setCityLoading]=useState(true)
  const [countryLoading, setCountryLoading]=useState(true)
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
    FetchService("GET","/api/geo/country")
    .then(res=>{
      console.log(res)
      setCountries(testCities) //set response data here
    })
    .then(()=>setCountryLoading(false))
    

    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);



    return () => {
      Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
      Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
    }
  },[])
  function findCity(country){
    setCountry(country)
    console.log("-0",country)

    FetchService("GET",`api/geo/${country._id}/city`)
    .then(res=>{
      console.log("--1",res)
       //set response data here
    })
    .catch(er=>console.log("--e",er))
    .then(()=>setCities(testCities)) // set these after fetch
    .then(()=>setCityLoading(false))
    

  }

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
    else if (email.length<1){
      setSignupError('insert email')
    }
    else if (password.length<1){
      setSignupError('insert password')
    }
    else if (password.length<8){
      setSignupError('password at least 8 characters')
    }
    else if (password!==password2){
      setSignupError('passwords do not match')
    }
    else{
      let body={
        firstName,lastName,country,city,address1,password,password2,phone
      }
      FetchService("POST","/customer/api/auth/register",3,body)
      .then(res=>console.log("-==-=-",res))
      .catch(er=>setSignupError(er.toString()))
      setTimeout(()=>{
        // props.navigation.navigate("AppStack")
      },2000)
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

          <Image
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
            alignSelf:'center'            
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
            Registration form
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
                <View
                style={styles.pickerContainer}
                >
                  <Text
                  style={styles.pickerText}
                  >Select country</Text>
                  {
                    countryLoading?<Text>loading</Text>
                    :<Picker
                    selectedValue={country}
                    style={styles.pickerStyle}
                    prompt="Select Country"
                    onValueChange={async (itemValue, itemIndex) =>findCity(itemValue)}>
                      <Picker.Item label={"All"} value={''} />
                      {
                        countries.map(city=><Picker.Item label={city.name} value={city} />)
                      }
                    </Picker>
                  }
                
                </View>
                
                <View
                style={styles.pickerContainer}
                >
                  <Text
                  style={styles.pickerText}
                  >Select city</Text>
                  {
                    cityLoading?
                    <Text>first Select country </Text>
                    :<Picker
                    selectedValue={city}
                    style={styles.pickerStyle}
                    prompt="Select City"
                    onValueChange={async (itemValue, itemIndex) =>setCity(itemValue)}>
                      <Picker.Item label={"All"} value={''} />
                      {
                        cities.map(city=><Picker.Item label={city.name} value={city} />)
                      }
                  </Picker>

                  }
                </View>
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
            <View
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
            </View>
          </View>
          {/* title and input ends */}
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
            Register
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
        onPress={()=>props.navigation.navigate("Login")}
        >
          <Text
          style={{
            fontSize:12,
            color:'#00163D',
            alignSelf:'center',
            fontWeight:'bold'
          }}
          >
            Already have account? Login
          </Text>
        </TouchableOpacity>
        </View>
        </ScrollView>
        </ImageBackground>
        
      </View>
    );
  }

const styles = StyleSheet.create({
  pickerText:{
    fontSize:10,
    alignSelf:'center',
    marginTop:5
  },
  pickerContainer:{
    backgroundColor:'#fff',
    borderRadius:5,
    height:50,
    marginHorizontal:5
  },
  pickerStyle:{
    height: 20,
    width: window.width/2.5
  }
});

  export default Login