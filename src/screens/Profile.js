import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  StatusBar,
  ScrollView,
  View,
  Image,
  Text
} from 'react-native';
const window = Dimensions.get('window');
import iconCountry from '../assets/icons/iconCountry.png';
import iconCity from '../assets/icons/iconCity.png';
import iconAddress from '../assets/icons/iconAddress.png';
import iconMail from '../assets/icons/iconMail.png';
import iconPhone from '../assets/icons/iconPhone.png';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import CategoryList from "../components/CategoryList"

import { TouchableOpacity } from 'react-native-gesture-handler';

const EventDetails: () => React$Node = ({navigation}) => {
  function logOut(){
    navigation.navigate("AuthStack")
  }

  const [eventData,setEventData]= useState(
    {
      id:"1",
      image: "https://app.imagineradio.io/media/album/art/default.jpg",
      brand:"Student",
      title:"name",
      age:21,
      country:'Bangladesh',
      city:'Dhaka',
      address:'Dhaka,bangladesh,Dhaka',
      phone:'0987654',
      mail:'sdhb@hk',
      details:"",
      topCategory:[
        {
          id:"1",
          image: "https://app.imagineradio.io/media/album/art/default.jpg",
          brand:"Bata",
          title:"A great event"
        },
        {
          id:"2",
          image: "https://app.imagineradio.io/media/album/art/default.jpg",
          brand:"Samsung",
          title:"event at ICCB"
        },
        {
          id:"3",
          image: "https://app.imagineradio.io/media/album/art/default.jpg",
          brand:"Apple",
          title:"Basundhara city"
        },
        {
          id:"4",
          image: "https://app.imagineradio.io/media/album/art/default.jpg",
          brand:"Xiaomi",
          title:"A bad event"
        },
        {
          id:"5",
          image: "https://app.imagineradio.io/media/album/art/default.jpg",
          brand:"NMH",
          title:"event at dit"
        },
        {
          id:"6",
          image: "https://app.imagineradio.io/media/album/art/default.jpg",
          brand:"DHT",
          title:"Basundhara complex"
        }
      ]
    })
    const [ profDetail , setProfDetail ] = useState(eventData.address)
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
            source={{uri:eventData.image}}
            style={styles.imgFit}
          />

          <View
          style={{
            width:window.height/10,
            height:window.height/10,
            borderRadius: window.height/20,
            backgroundColor:'#fff',
            position:'absolute',
            top:window.height/60,
            left:window.width/9,
            justifyContent:'center'
          }}
          >
            <Text
            style={{
              alignSelf:'center',
              color:"#100746",
              fontWeight:'bold',
              fontSize:45
            }}
            >
              {"\u002B"}
            </Text>
          </View>
          <View
          style={{
              height:window.height /8,
              backgroundColor:'#100746',
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
            {/* address row starts*/}
            <View
            style={{
              flexDirection:'row',
              justifyContent:'space-evenly',
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
              onPress={()=> setProfDetail(eventData.country) }
              >
                
                <Image
                  style={styles.footerIcon}
                  source={iconCountry}
                />
                <Text
                  style={styles.footerTxt}
                >
                  Country
                </Text>
              </TouchableOpacity>
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
              onPress={()=>setProfDetail(eventData.city) }
              >
                
                <Image
                  style={styles.footerIcon}
                  source={iconCity}
                />
                <Text
                style={styles.footerTxt}
              >
                City
              </Text>
              </TouchableOpacity>
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
              onPress={()=>setProfDetail(eventData.address) }
              >
                
                <Image
                  style={styles.footerIcon}
                  source={iconAddress}
                />
                <Text
                  style={styles.footerTxt}
                >
                  Address
                </Text>
              </TouchableOpacity>
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
              onPress={()=>setProfDetail(eventData.phone) }
              >
                
                <Image
                  style={styles.footerIcon}
                  source={iconPhone}
                />
                <Text
                  style={styles.footerTxt}
                >
                  Phone
                </Text>
              </TouchableOpacity>
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
              onPress={()=>setProfDetail(eventData.mail) }
              >
                
                <Image
                  style={styles.footerIcon}
                  source={iconMail}
                />
                <Text
                    style={styles.footerTxt}
                  >
                    Email
                  </Text>
              </TouchableOpacity>
            </View>
            {/* address row ends */}
          </View>
        </View>
        {/* Timer card ends */}
        <View
        style={{
          backgroundColor:'#6c5ce7',
          height:30,
          width:window.width/1.3,
          borderRadius:5,
          marginBottom:5,
          alignSelf:'center',
          justifyContent:'center',
          marginTop:-20,
        }}
        >
            <Text
            style={{
              color:'#fff',
              alignSelf:'center',
              fontStyle:'italic',
              fontSize:15,
              fontWeight:'bold',
            }}
            >{profDetail}</Text>
            </View>
        
        <CategoryList
        title="Event summary"
        navigation={navigation}
        darkText
        data={eventData.topCategory}
        />
        <TouchableOpacity
        style={{
          height:window.height/8,
          width:window.width,
          backgroundColor:"#313E55",
          justifyContent:'center'
        }}
        onPress={logOut}
        >
          <Text
          style={{
            fontSize:35,
            color:'white',
            alignSelf:'center'
          }}
          >
            Logout
          </Text>
        </TouchableOpacity>
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
		width: window.height / 60,
		height: window.height / 60,
		marginBottom: 5
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
