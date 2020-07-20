import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  StatusBar,
  ScrollView,
  View,
  Image,
  Text,
  TouchableHighlight,
  Modal
} from 'react-native';
const window = Dimensions.get('window');
import iconPlay from '../assets/icons/iconPlay.png';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import SmallH2 from "../components/SmallH2";
import CategoryList from "../components/CategoryList"

import { TouchableOpacity } from 'react-native-gesture-handler';

const EventDetails: () => React$Node = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(()=>{
    setEventData({
      ...eventData,
      ...navigation.state.params.item,
      details: navigation.state.params.item?navigation.state.params.item.details.substring(0, 90)+"...":""
    })
  },[navigation])
  function closeModal(){
    setModalVisible(false)
    navigation.navigate("Home")
  }
  function confirmBooking(){
    setModalVisible(true)
  }
  const [eventData,setEventData]= useState(
    {
      id:"1",
      image: "https://app.imagineradio.io/media/album/art/default.jpg",
      brand:"",
      title:"",
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
      ],
      relatedEvents:[
        {
          id:"1",
          image: "https://app.imagineradio.io/media/album/art/default.jpg",
          brand:"Bata",
          title:"A great event",
          details:" A great event A great event A great event A great event A great event A great event A great event A great event A great eventA great event A great event A great event A great event  A great event  A great event  A great event ",
    
        },
        {
          id:"2",
          image: "https://app.imagineradio.io/media/album/art/default.jpg",
          brand:"Samsung",
          title:"event at ICCB",
          details:" A great event A great event A great event A great event A great event A great event A great event A great event A great eventA great event A great event A great event A great event  A great event  A great event  A great event ",
    
        },
        {
          id:"3",
          image: "https://app.imagineradio.io/media/album/art/default.jpg",
          brand:"Apple",
          title:"Basundhara city",
          details:" A great event A great event A great event A great event A great event A great event A great event A great event A great eventA great event A great event A great event A great event  A great event  A great event  A great event ",
    
        },
        {
          id:"4",
          image: "https://app.imagineradio.io/media/album/art/default.jpg",
          brand:"Xiaomi",
          title:"A bad event",
          details:" A great event A great event A great event A great event A great event A great event A great event A great event A great eventA great event A great event A great event A great event  A great event  A great event  A great event ",
    
        },
        {
          id:"5",
          image: "https://app.imagineradio.io/media/album/art/default.jpg",
          brand:"NMH",
          title:"event at dit",
          details:" A great event A great event A great event A great event A great event A great event A great event A great event A great eventA great event A great event A great event A great event  A great event  A great event  A great event ",
    
        },
        {
          id:"6",
          image: "https://app.imagineradio.io/media/album/art/default.jpg",
          brand:"DHT",
          title:"Basundhara complex",
          details:" A great event A great event A great event A great event A great event A great event A great event A great event A great eventA great event A great event A great event A great event  A great event  A great event  A great event ",
    
        }
      ],

    })
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
        <View
        style={styles.slideHolder}
        >
          <Image
            source={{uri:eventData.image}}
            style={styles.imgFit}
          />
          <Text
            style={[{
                top:window.height/5,
            }, styles.sliderTextAbsolute,styles.sliderLargeText]}
          >
            {eventData.brand}
          </Text>
          <Text
            style={[{
                top:window.height/5 +25
            }, styles.sliderTextAbsolute]}
            >
              {eventData.title}
          </Text>
          
          <View
          style={{
              height:window.height /6,
              backgroundColor:'#100746',
              borderRadius:50,
              justifyContent:'center',
              position:"absolute",
              top:window.height/3,
              width:window.width,
              alignItems:'center'
          }}
          >
            <Text
            style={styles.sliderLargeText}
            >
              <Text
              style={styles.footer}
              >
                Day                   Hour                      Minute{"\n"}
              </Text>
                10      :   20    :       30
            </Text>
          </View>
        </View>
        {/* Timer card ends */}
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
          <Text style={styles.modalText}>Confirmed your booking. Enjoy!</Text>

                <TouchableHighlight
                  style={{ ...styles.openButton, backgroundColor: "#100746" }}
                  onPress={closeModal}
                >
                  <Text style={styles.textStyle}>Close</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>
        <View
        style={{
          marginHorizontal:40,
          marginVertical: 30,
          backgroundColor:'#100746',
          borderRadius: 25,
          height:window.height/4,

          flexDirection:'row'
        }}
        >
          <TouchableOpacity
          style={{
            width: window.width/3.5,
            height: window.width/3.5,
            margin:30,
            borderRadius:25,
          }}
          >
          <Image
            source={{uri:eventData.image}}
          style={{
            width: window.width/3.5,
            height:window.width/3.5,
            resizeMode: 'cover',
            borderRadius:24,

        }}
          />
          <Image
					style={{
            position:'absolute',
            top:window.height / 18,
            left:window.height / 18,
            width: window.height / 20,
            height: window.height / 20,
            marginBottom: 5
          }}
					source={iconPlay}
				/>
          </TouchableOpacity>
          
          <View
          style={{
            width:window.width/3.5,
            height:window.width/3.5,
            flexDirection:'column'
          }}
          >
          <View
          style={{
            width:window.width/3.5,
          }}
          >
            <Text
            style={{
              fontSize:15,
              color:'white',
              fontWeight:'700',
              marginTop: window.height/18,
          }}
            >
              {eventData.brand}{"\n"}
                <Text
                style={{
                  fontSize: 7,
                  color:'#fff'
                }}
                >
                  {eventData.details}
                </Text>
            </Text>
          </View>
          <TouchableOpacity
            style={{
              height:window.width/13,
              width: window.width/5.5,
              marginTop:15,
              borderRadius:7,
              backgroundColor: '#fbc531'
            }}
            onPress={confirmBooking}
            >
              <Text
              style={{
                color:'black',
                fontSize:8,
                margin: window.width/40,
                fontWeight:'bold'
              }}
              >
                Book now{"\u21AC"}
              </Text>
            </TouchableOpacity>
          </View>
          
        </View>
        {/* preview card ends */}
        <SmallH2
            data={eventData.relatedEvents}
            navigation={navigation}
            darkText
            title="Related Events"
        />
        <CategoryList
        title="Top Categories"
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
        onPress={confirmBooking}
        >
          <Text
          style={{
            fontSize:35,
            color:'white',
            alignSelf:'center'
          }}
          >
            Book Now
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
      height: window.height /2
  },
  imgFit: {
      width: window.width,
      height:window.height /2.4,
      resizeMode: 'cover'
  },
  indicatorHolder: {
      width: window.width * 42 / 375,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      alignSelf: 'center',
      position: 'absolute',
      bottom: 10,
      marginHorizontal: 'auto'
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
      fontSize:20,
      color:'white',
      fontWeight:'700'
  },
  sliderTextAbsolute: {
      position:"absolute",
      color:'white',
      left:window.width/3,
      
  },
  scrollView: {
    backgroundColor: "#fff",
  },
  engine: {
    position: 'absolute',
    right: 0,
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
  footer: {
    fontSize: 11,
    fontWeight: '600',
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
