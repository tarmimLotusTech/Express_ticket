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
  TouchableOpacity
} from 'react-native';
const window = Dimensions.get('window');
import iconBack from '../assets/icons/iconBack.png';
import iconCountry from '../assets/icons/iconCountry.png';
import iconCity from '../assets/icons/iconCity.png';
import iconPhone from '../assets/icons/iconPhone.png';
import iconMail from '../assets/icons/iconMail.png';
import FastImage from "react-native-fast-image";

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import FetchService from '../services/FetchService';

const ProfileDetails: () => React$Node = ({navigation}) => {
  useEffect(()=>{
  },[navigation])
  const [loading, setLoading] = useState(false)

  const [eventData,setEventData]= useState(
    {
      id:"1",
      image: "https://app.imagineradio.io/media/album/art/default.jpg",
      brand:"Student",
      title:"name",
      age:21,
      country:'Bangladesh',
      city:'Dhaka',
      address:'Dhaka, bangladesh, Dhaka',
      phone:'0987654',
      mail:'sdhb@hk',
      details:""
    })
    const [profileImage, setProfileImage]=useState({uri:eventData.image})
    const [ profDetail , setProfDetail ] = useState(eventData.mail)
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
          <FastImage
            source={navigation.state.params.profileImage}
            style={styles.imgFit}
          />
          <View
          style={{
            width:window.height/18,
            height:window.height/18,
            borderRadius: window.height/36,
            backgroundColor:'#100746',
            position:'absolute',
            top:window.height/40,
            left:window.width/7.5,
            justifyContent:'center'
          }}
          >
            <TouchableOpacity
              onPress={()=>navigation.goBack()}
            >
                <FastImage
                  style={[styles.footerIcon,{
                    width: window.height / 25,
		                height: window.height / 25,
                    alignSelf:'center'
                  }]}
                  source={iconBack}
                />
            </TouchableOpacity>
          </View>
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
              <Text
              style={styles.footer}
              >
                {eventData.brand}{'  '}
              </Text>
              {eventData.title} ( {eventData.age} )
            </Text>
            
          </View>
        </View>
        {/* Timer card ends */}
        <View
        style={{
          marginTop:-20,
          height:window.height/2
        }}
        >
          <View
          style={styles.profileCardContainer}
          >
            <FastImage

              style={[styles.footerIcon,{
                width: window.height / 25,
                height: window.height / 25,
                alignSelf:'center',
                marginLeft:-5
              }]}
              source={iconCountry}
            />
            <Text
            style={styles.profileCardData}
            >
              Bangladesh
            </Text>
          </View>

          <View
          style={styles.profileCardContainer}
          >
            <FastImage
              style={[styles.footerIcon,{
                width: window.height / 20,
                height: window.height / 18,
                alignSelf:'center',
                marginLeft:-10
              }]}
              source={iconCity}
            />
            <Text
            style={styles.profileCardData}
            >
              Dhaka city 
            </Text>
          </View>

          <View
          style={styles.profileCardContainer}
          >
            <FastImage
              style={[styles.footerIcon,{
                width: window.height / 25,
                height: window.height / 25,
                alignSelf:'center'
              }]}
              source={iconPhone}
            />
            <Text
            style={styles.profileCardData}
            >
              +880192837465
            </Text>
          </View>

          <View
          style={styles.profileCardContainer}
          >
            <FastImage
              style={[styles.footerIcon,{
                width: window.height / 19,
                height: window.height / 25,
                alignSelf:'center'
              }]}
              source={iconMail}
            />
            <Text
            numberOfLines={2}
            style={styles.profileCardData}
            >
              dhakacity@d.com
            </Text>
          </View>

          

          

          

          

          
        
        </View>        
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  profileCardContainer:{
    flexDirection:'row',
    height:55,
    width:window.width/1.4,
    justifyContent:'space-around',
    paddingHorizontal:20,
    marginVertical:5,
    alignSelf:'center',
    backgroundColor:"#EAECEE",
    borderRadius:5
  },
  profileCardTitle:{
    fontSize:20,
    marginTop:5
  },
  profileCardData:{
    marginTop:25,
    color:'grey'
  },
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
      borderTopLeftRadius:40,
      borderTopRightRadius:40,
      resizeMode: 'cover'
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

export default ProfileDetails;
