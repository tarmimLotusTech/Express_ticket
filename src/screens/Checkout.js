import React, { useState, useEffect } from "react";
import { ImageBackground,Dimensions, Text, TextInput, TouchableOpacity, View ,StyleSheet,Picker, Keyboard, ScrollView} from "react-native";
import loginStyles from "../styles/loginStyles";
const window = Dimensions.get('window');
import FastImage from "react-native-fast-image";

import { 
  systemWeights
} from 'react-native-typography';
import FetchService from "../services/FetchService";

function Checkout (props) {
  const [keyFocus,setKeyFocus]=useState(false)
  
  const [countries, setCountries]=useState('')
  const [cities, setCities]=useState('')
  const [cityLoading, setCityLoading]=useState(true)
  const [countryLoading, setCountryLoading]=useState(true)
  const [firstName,setFName]=useState('Name')
  const [quantity,setQuantity]=useState("5")
  const [country,setCountry]=useState('Bangladesh')
  const [city,setCity]=useState('Dhaka')
  const [address1,setAddress1]=useState('Gulshan')
  const [address2,setAddress2]=useState('Gulshan')
  const [phone,setPhone]=useState('9999')
  const [email,setEmail]=useState('z@z.zz')
  const [password,setPassword]=useState('11111111')
  const [password2,setPassword2]=useState('11111111')
  const [signupError, setSignupError]=useState('Error: **Some Data are autofilled')

  const [ zipCode,setZipCode]= useState('1209')
  const [ additionalInfo,setAddInfo]= useState("No info")
  
  const _keyboardDidShow = () => {
    setKeyFocus(true)
  };

  const _keyboardDidHide = () => {
    setKeyFocus(false)
  };
  useEffect(()=>{
    const {params}=props.navigation.state
    // console.log(params.id , params.item,"=-=-")
    FetchService("GET","/api/geo/country")
    .then(res=>setCountries(res))
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

    FetchService("GET",`/api/geo/${country._id}/city`)
    .then(res=>setCities(res))
    .then(()=>setCityLoading(false))
    .catch(er=>console.log("--e",er))
  }

  function handleSubmit() {
    const {params}=props.navigation.state

    if (firstName.length<1){
      setSignupError('insert name')
    }
    else if (quantity.length<1){
      setSignupError('insert last name')
    }
    else if (country.length<1){
      setSignupError('insert country')
    }
    else if (city.length<1){
      setSignupError('insert city')
    }
    else if (address1.length<1 || address2.length<1){
      setSignupError('insert address')
    }
    else if (phone.length<1){
      setSignupError('insert phone number')
    }
    // else if (email.length<1){
    //   setSignupError('insert email')
    // }
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
        billingAddress:{firstName,lastName:"last "+firstName,country:country.name,city:city.name,address1,address2,phone,email,zipCode,additionalInfo},
        password,
        password2,
        createAccount:true,
        items:[{
          product:params.id,
          quantity:parseInt(quantity.replace("-","").replace(",","")),
          variation:params.item._id
        }]
      }
      FetchService("POST","/api/checkout",3,body,false)
      .then(res=>{
        console.log(res)
        if(res.inserted){
          props.navigation.navigate("TicketDetails",{inserted:res.inserted ,item:params.item, eventData:params.eventData})
        }
        else throw (Object.entries(res)[0][0]+" : "+Object.entries(res)[0][1])
      })
      .catch(er=>console.log("error-==",er))
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
            Billing Address
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
                placeholder="How many tickets?"
                value={quantity}
                keyboardType="decimal-pad"
                style={[loginStyles.txtInputSignup,{
                  width: window.width*150/375,
                  paddingLeft: 6,

                }]}
                onChangeText={setQuantity}
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
                        countries.map(city=><Picker.Item key={city._id} label={city.name} value={city} />)
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
            Checkout
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
  export default Checkout