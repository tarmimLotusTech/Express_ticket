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
  Modal,
  ActivityIndicator
} from 'react-native';
const window = Dimensions.get('window');
import iconPlay from '../assets/icons/iconPlay.png';
import LinearGradient from 'react-native-linear-gradient';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import SmallH2 from "../components/SmallH2";
import CategoryList from "../components/CategoryList"

import { TouchableOpacity } from 'react-native-gesture-handler';
import VideoComponent from '../components/VIdeoComponent';
import FetchService from '../services/FetchService';
import { BaseUrl } from '../env';

const EventDetails: () => React$Node = ({navigation}) => {
  const [loading,setLoading]=useState(true)
  const [modalVisible, setModalVisible] = useState(false);
  const [date,setDate]=useState([])
  const [vSource, setvSource]=useState('http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4')
  useEffect(()=>{
    FetchService("GET","/api/product/"+navigation.state.params.id)
    .then(res=>{
      setEventData(res)
      // setDate(res.date.split("-"))
    })
    .then(()=>setLoading(false))
  },[navigation])
  function closeModal(){
    setModalVisible(false)
    navigation.navigate("Home")
  }
  function confirmBooking(item){
    navigation.navigate("Checkout",{eventData, id:eventData._id ,item})

  }
  const [eventData,setEventData]= useState({})
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
        style={styles.slideHolder}
        >
          <Image
            source={{uri:
              eventData.cover?
              BaseUrl+eventData.cover.full:"https://app.imagineradio.io/media/album/art/default.jpg"
            }}
            style={styles.imgFit}
          />
          <LinearGradient
              colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.5)']}
              style={{
                position:'absolute',
                top:window.height/4.8,
                width:window.width,
                height:window.height/3.3,
                justifyContent:'space-between'
              }}
            >
          <View
          style={{
            marginTop:window.height/7,
            height:window.height/11,
            marginLeft:window.width/15,
            justifyContent:'space-evenly'

          }}
          >
          <Text
            style={{
                fontSize:20,
                fontWeight:'700',
                color:'#fff',
            }}
          >
            {eventData.name}
          </Text>
          <Text
            style={{
              fontSize:12,
              color:'#fff',
            }}
            >
              {eventData.model}model
          </Text>
          </View>
          <View
          style={{
              height:window.height /10,
              backgroundColor:'#00163D',
              borderRadius:window.height/25,
              justifyContent:'center',
              alignSelf:'flex-end',
              marginBottom:-window.height/20,
              // mar
              // marginTop:window.height/4.2,
              // position:"absolute",
              // top:window.height/2.2,
              // alignSelf:'flex-end',
              width:window.width,
              alignItems:'center',
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
          </LinearGradient>
        </View>
        {/* Timer card ends */}
        <View
        style={{
          width:window.width/1.1,
          alignSelf:'center',
          flexDirection:'row',
          justifyContent:'space-around',
          marginVertical:10,
          marginBottom:30
        }}
        >
        {
          eventData.pricing.map(price=>
            <View
            key={price._id}
            >
              <View
                style={{
                  height:window.width/10,
                  width: window.width/3.6,
                  borderRadius:7,
                  backgroundColor: '#100746',
                  justifyContent:'center',
                  alignItems:'center',
                  marginTop:10,
                  marginBottom:5
                }}
              >
                <Text
                style={{
                  color:'#fff',
                  fontSize:18,
                  fontWeight:'bold'
                }}
                >{
                  Object.entries(price.attribute).length?
                  Object.entries(price.attribute)[0][1]
                  :"Regular"
                }</Text>
              </View>

              <View
              style={{
                height:window.height/5,
                marginBottom:10,
                borderRadius:7,
                backgroundColor: '#100746',
                justifyContent:"space-around",
                paddingTop:15
              }}
              >
                <Text
                style={{
                  color:'#fff',
                  fontSize:25,
                  alignSelf:'center',
                  fontWeight:'bold',
                  marginTop:window.height/70
                }}
                >${price.price.regular} </Text>
                <View
                style={{
                  height:window.height/70,
                  marginTop:window.height/35,
                  flexDirection:'row',
                  justifyContent:'space-between'
                }}
                >
                  <View
                  style={{
                    height:window.height/70,
                    width:window.height/140,
                    backgroundColor:'#fff',
                    borderTopRightRadius: window.height/140,
                    borderBottomRightRadius: window.height/140
                  }}
                  />
                  <View
                  style={{
                    height:window.height/300,
                    width: window.width/5,
                    backgroundColor:'#fff',
                    marginTop:4
                  }}
                  />

                  <View
                  style={{
                    height:window.height/70,
                    width:window.height/140,
                    backgroundColor:'#fff',
                    borderTopLeftRadius: window.height/140,
                    borderBottomLeftRadius: window.height/140
                  }}
                  />
                  
                </View>
                <Text
                  style={{
                    color:'grey',
                    fontSize:12,
                    alignSelf:'center',
                    marginBottom:window.height/70

                  }}
                  >Available: {price.stock.available}
                  </Text>
                </View>
            
            <TouchableOpacity
            style={{
              height:window.width/10,
              width: window.width/4,
              borderRadius:7,
              backgroundColor: '#F1C100',
              justifyContent:'center',
              alignItems:'center',
              alignSelf:'center'
            }}
            onPress={()=> confirmBooking(price)}
            >
              <Text
              style={{
                color:'black',
                fontSize:18,
                fontWeight:'bold'
              }}
              >
                Book now
              </Text>
            </TouchableOpacity>
            </View>
            )
        }
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          
        >
          <VideoComponent
          vSource={vSource}
          onBack={()=>setModalVisible(false)}
          />
        </Modal>
        <View
        style={{
          marginHorizontal:10,
          marginBottom:window.height/25,
          backgroundColor:'#00163D',
          borderRadius: 25,
          height:window.height/4,
          flexDirection:'row',
          elevation:10
        }}
        >
          <TouchableOpacity
          style={{
            width: window.width/2,
            height: window.width/2.5,
            margin:window.width/50,
            borderRadius:25,
          }}
          onPress={()=>setModalVisible(true)}
          disabled={true}
          >
          <Image
            source={{uri:
              eventData.image[0]?
              BaseUrl+eventData.image[0].full
              :"https://app.imagineradio.io/media/album/art/default.jpg"
          }}
          style={{
            width: window.width/2,
            height:window.width/2.5,
            resizeMode: 'cover',
            borderRadius:25,

        }}
          />
          {/* <Image
					style={{
            position:'absolute',
            top:window.height / 12.5,
            left:window.height / 9.5,
            width: window.height / 15,
            height: window.height / 15,
          }}
					source={iconPlay}
				/> */}
          </TouchableOpacity>
          
          <View
          style={{
            width:window.width/3.5,
            height:window.width/3.5,
            alignSelf:'center',
            justifyContent:'center'
          }}
          >
              <Text
              numberOfLines={2}
              style={{
                fontSize:15,
                color:'white',
                fontWeight:'700',
                alignSelf:'center'
            }}
              >
                {eventData.name}
              </Text>
              <Text
                style={{
                  fontSize:10,
                  color:'white',
                  fontWeight:'700',
                  alignSelf:'center'
                }}
                >
                {eventData.model}
                </Text>
          </View>
          
        </View>
        <Text
              style={{
                color:'#00163D',
                fontSize:18,
                marginTop:-5,
                marginLeft:23,
                marginBottom:15,
                fontWeight:'bold'
              }}
              >
          Description
        </Text>
        <Text
            style={{
              fontSize: 12,
              color:'#00163D',
              textAlign:'left',
              margin:20,
              marginTop:-10
            }}
            >
              {eventData.description}
          </Text>
        {/* preview card ends */}
        {/* <SmallH2
            data={eventData.relatedEvents}
            navigation={navigation}
            darkText
            title="Related Events"
        /> */}
        <Text
              style={{
                color:'#00163D',
                fontSize:18,
                marginTop:-5,
                marginLeft:23,
                marginBottom:15,
                fontWeight:'bold'
              }}
              >
          Organiser
        </Text>
      {
        eventData.brand.name?<View
        style={{
          marginHorizontal:10,
          marginBottom:window.height/25,
          backgroundColor:'#00163D',
          borderRadius: 25,
          height:window.height/3,
          elevation:10
        }}
        >
          <View
          style={{
            width:window.width/1.2,
            height:window.height/8,
            alignSelf:'center',
            justifyContent:'center',
            // backgroundColor:'red'
          }}
          >
              <Text
              numberOfLines={2}
              style={{
                fontSize:15,
                color:'white',
                fontWeight:'700',
                alignSelf:'center'
            }}
              >
                {eventData.brand.name}
              </Text>
              <Text
                style={{
                  fontSize:10,
                  color:'white',
                  fontWeight:'700',
                  alignSelf:'center'
                }}
                >
                {eventData.brand.description}
                </Text>
          </View>
          <TouchableOpacity
          style={{
            width: window.width/2,
            height: window.width/3,
            margin:window.width/50,
            borderRadius:25,
            alignSelf:'center'
          }}
          onPress={()=>setModalVisible(true)}
          disabled={true}
          >
          <Image
            source={{uri:eventData.brand.cover?
              BaseUrl+eventData.brand.cover.full
              :"https://app.imagineradio.io/media/album/art/default.jpg"}}
          style={{
            width: window.width/2,
            height:window.width/3,
            resizeMode: 'cover',
            borderRadius:25,

        }}
          />
          {/* <Image
					style={{
            position:'absolute',
            top:window.height / 12.5,
            left:window.height / 9.5,
            width: window.height / 15,
            height: window.height / 15,
          }}
					source={iconPlay}
				/> */}
          </TouchableOpacity>
          
          
          
        </View>
        :<View/>}
        
        <CategoryList
        title="Related Categories"
        navigation={navigation}
        darkText
        data={eventData.category}
        />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  slideShow: {
    width: window.width,
    height: window.height /2.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideHolder: {
      width: window.width,
      height: window.height /1.9,
      marginBottom:15
  },
  imgFit: {
      width: window.width,
      height:window.height /2,
      resizeMode: 'contain'
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
      // position:"absolute",
      color:'#00163D',
      // left:window.width/10,
      
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
