import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  StatusBar,
  ScrollView,
  View,
  Text,
  ActivityIndicator,
  Image,
  TouchableOpacity
} from 'react-native';
const window = Dimensions.get('window');
import iconProfileMenu from '../assets/icons/iconProfileMenu.png';
import iconLogout from '../assets/icons/iconLogout.png';
import iconEditProfile from '../assets/icons/iconEditProfile.png';
import iconProfileDetails from '../assets/icons/iconProfileDetails.png';
import ImagePicker from 'react-native-image-picker';
import AsyncStorage from '@react-native-community/async-storage';
import avatarIcon from '../assets/images/avatarIcon.png';
import editPasswordIcon from '../assets/icons/editPassword.png';
const pickerOptions = {
  title: 'Select Image',
  cancelButtonTitle:'Go back',
  cameraType:'front',
  mediaType:'photo',
  quality:1,
  storageOptions: {
    skipBackup: true,
    path: 'express_ticket',
  },
};
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import SmallH2 from "../components/HistorySlider"
import FetchService from '../services/FetchService';
import FastImage from "react-native-fast-image";

const EventDetails: () => React$Node = ({navigation}) => {
  function getProduct(){
    AsyncStorage.getItem('userToken')
    .then(sesToken=>{
      if (sesToken){
        FetchService("GET","/customer/api/profile")
        .then(response=>setEventData(response))
        .then(()=>FetchService("GET","/customer/api/order"))
        .then(res=>{
          setData(res.data)
        })
        .then(()=>setLoading(false))
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
  const [loading, setLoading] = useState(true)
  const [data,setData]=useState([])

  function logOut(){
    setMenuDrop(false)
    navigation.navigate("AuthStack")
    AsyncStorage.removeItem("userToken")
  }
  function editProfile(){
    setMenuDrop(false)
    navigation.navigate("EditProfile")
  }
  function profileDetails(){
    setMenuDrop(false)
    navigation.navigate("ProfileDetails",{eventData})
  }
  function editPassword(){
    setMenuDrop(false)
    navigation.navigate("ChangePassword")
  }
  const options=[{
    title:"Details",
    onPress:profileDetails,
    icon:iconProfileDetails
  },
  {
    title:"Edit Profile",
    onPress:editProfile,
    icon:iconEditProfile
  },
  {
    title:"Logout",
    onPress:logOut,
    icon:iconLogout
  },
  {
    title:"Change Password",
    onPress:editPassword,
    icon:editPasswordIcon
  }]
  const [ menuDrop , setMenuDrop ] = useState(false)
  const [eventData,setEventData]= useState({})
    const [profileImage, setProfileImage]=useState(avatarIcon)
    const [ profDetail , setProfDetail ] = useState(eventData.mail)
    function uploadImage(){
      ImagePicker.showImagePicker(pickerOptions, (response) => {
      
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          const source = { uri: response.uri };
      
          // You can also display the image using data:
          // const source = { uri: 'data:image/jpeg;base64,' + response.data };
          setProfileImage(source)
        }
      });
      
    }
  if (loading)
  return <ActivityIndicator size="large" color="#00163D" style={{
    alignSelf:'center',
    marginTop:'80%'
  }} />
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View
          style={{
              height:window.height /6,
              backgroundColor:'#100746',
              justifyContent:'center',
              width:window.width,
              alignItems:'center'
          }}
          />
        <View
        style={styles.slideHolder}
        >
          <Image
            source={profileImage}
            style={styles.imgFit}
          />

          <TouchableOpacity
          style={{
            width:window.height/18,
            height:window.height/18,
            borderRadius: window.height/36,
            backgroundColor:'white',
            position:'absolute',
            top:window.height/40,
            left:window.width/7.5,
            justifyContent:'center'
          }}
              onPress={uploadImage}
          >
           
            <Text
            style={{
              alignSelf:'center',
              color:"#100746",
              fontWeight:'bold',
              fontSize:35
            }}
            >
              {"\u002B"}
            </Text>
            </TouchableOpacity>
          <View
          style={{
              height:window.height /8,
              backgroundColor:'#1E174A',
              borderTopLeftRadius:50,
              borderTopRightRadius:50,
              opacity:0.7,
              justifyContent:'center',
              marginTop: -(window.height/2.4),
              top:window.height/3.45,
              width:window.width/1.2,
              alignItems:'center'
          }}
          >
            <Text
            style={styles.sliderLargeText}
            >
                {eventData.firstName}{'  '}{eventData.lastName}
            </Text>
            {/* address row starts*/}
            <View
            style={{
              flexDirection:'row',
              justifyContent:'flex-end',
              width:window.width/1.3,
              paddingTop:20
            }}
            >
              <TouchableOpacity
              style={{
                height:window.width/9,
                width:window.width/9,
                backgroundColor:'#fff',
                marginHorizontal:10,
                borderRadius:5,
                borderWidth:1,
                borderColor:'black',
                justifyContent:'center',
                alignItems:'center'
              }}
              onPress={()=>setMenuDrop(!menuDrop) }
              >
                <Image
                  style={styles.footerIcon}
                  source={iconProfileMenu}
                />
              </TouchableOpacity>
            </View>
            {/* address row ends */}
          </View>
        </View>
        {/* Timer card ends */}
        <View
        style={{
          marginTop:-30,
        }}>
          
          <SmallH2
          title="Purchase History"
          navigation={navigation}
          darkText
          data={data}
          />
          {
          menuDrop?
          <View
            style={{
              position: 'absolute',
              backgroundColor:'#E6E8EA',
              width:window.width/1.5,
              borderRadius:10,
              right:10
            }}
            >{
              options.map(option=>
              
                <TouchableOpacity
                key={option.title}
                style={{
                  margin:5,
                  justifyContent:'space-between',
                  paddingHorizontal:35,
                  alignItems:'center',
                  height:window.width/10,
                  width:window.width/1.3,
                  borderRadius:5,
                  alignSelf:'center',
                  flexDirection:'row'
                }}
                onPress={option.onPress}
                >
                    <Text
                    style={{
                      color:'#100746',
                      alignSelf:'center',
                      fontStyle:'italic',
                      fontSize:15,
                      fontWeight:'bold',
                    }}
                    >{option.title}</Text>
                  <FastImage
                      style={styles.footerIcon}
                      source={option.icon}
                    />
                </TouchableOpacity>)
                }</View>
                :<View/>
        }
        </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  slideShow: {
    width: window.width,
    height: window.height /2.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideHolder: {
      width: window.width,
      height: window.height /2,
      alignItems:'center',
      marginTop:-70
  },
  imgFit: {
      width: window.width/1.2,
      height:window.height /2.4,
      borderRadius:40,
      resizeMode: 'contain',
      margin:10
  },
  indicator: {
      width: window.width * 4 / 375,
      height: window.width * 4 / 375,
      borderRadius: window.width * 2 / 375,
      backgroundColor: '#fff'
    },
  indicatorSelected: {
      width: window.width * 12 / 375,
      height: window.width * 4 / 375,
      borderRadius: window.width * 2 / 375,
      backgroundColor: '#fff'
  },
  sliderLargeText: {
      marginTop:35,  
      fontSize:20,
      color:'white',
      fontWeight:'700'
  },
  scrollView: {
    backgroundColor: "#fff",
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footerIcon: {
		width: window.height / 40,
		height: window.height / 40,
	},
  footer: {
    fontSize: 11,
    fontWeight: '600',
  },
	footerTxt: {
		fontSize: 8,
		color: 'black'
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
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
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default EventDetails;
