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
  ActivityIndicator
} from 'react-native';
const window = Dimensions.get('window');
import iconTicketHome from '../assets/icons/iconTicketHome.png';
import ticket from '../assets/images/ticket.png'

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FetchService from '../services/FetchService';
import { BaseUrl } from '../env';

const EventDetails: () => React$Node = ({navigation}) => {

  const TextBox=(props)=> <View
  style={{
    padding:10,
    height:window.height/6,
    width:window.width/3
  }}
  >
    <Text
    style={{
      fontSize:18,
      fontWeight:'bold',
      color:"#8278C7"
    }}
    >
      {props.title}
    </Text>
    <Text
    style={{
      fontSize:12,
      color:'grey'
    }}
    >
      {props.text}
    </Text>
  </View>
  const {item,cover}=navigation.state.params
  const [loading,setLoading]=useState(false)
  const [modalVisible, setModalVisible] = useState(false);
  const [date,setDate]=useState([])
  useEffect(()=>{
    console.log(cover)
  },[navigation])

  const [eventData,setEventData]= useState(item)
  let newdate=new Date()
  const today= newdate.getDate()+" - "+newdate.getMonth()+" - "+newdate.getFullYear()

    if (loading)
    return <ActivityIndicator/>
    return (
    <>
      <StatusBar barStyle="dark-content" />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Image
            source={{uri:cover}}
            style={styles.imgFit}
          />
          <View
          style={{
            height:undefined,
            width:window.width,
            marginTop:-25,
            borderTopLeftRadius:25,
            borderTopRightRadius:25,
            backgroundColor:'#F9F8FF',
            elevation:30
          }}
          >
            <View>
              <Text
              numberOfLines={2}
              style={{
                marginTop:25,
                fontSize:25,
                color:'#100846',
                alignSelf:'center',
                fontWeight:'bold',
                textAlign:'center'
              }}
              >Loveseat Wedding and Event Planning</Text>
              <View
              style={styles.ticketCard}>
                <TextBox title={"Order Date"} text={today} />
                <TextBox title={"Event Date"} text={today} />
              </View>

              <View
              style={styles.ticketCard}>
                <TextBox title={"Address"} text={"1/1-a, Gulshan, dhaka,bangladesh"} />
                <TextBox title={"Price Detail"} text={"Premium\n$250\nquantity: 02"} />
              </View>

              <View
              style={{
                elevation:3,
                height:window.height/3,
                width:window.width/1.3,
                alignSelf:'center',
                borderRadius:20,
                marginVertical:20,
                marginBottom:50,
                alignItems:'center'
              }}>
                <View
                style={{
                  flexDirection:'row',
                  justifyContent:'space-between',
                  alignItems:'center',
                  marginTop:30
                }}
                >
                  <View
                  style={{
                    marginTop:10
                  }}
                  >
                    <Text
                    style={{
                      fontSize:18,
                      opacity:0.5,
                      fontWeight:'bold'
                    }}
                    >
                      Ticket
                    </Text>
                  <Image
                source={ticket}
                style={{
                  width: window.width/5,
                  height:window.height /6,
                  resizeMode: 'contain',
                  opacity:0.5,
                  marginRight:20,
                }}
                />
                </View>
                <Image
                source={{uri:cover}}
                style={{
                  width: window.width/3,
                  height:window.height /5,
                  backgroundColor:'black',
                  resizeMode: 'contain',
              }}
              />
              </View>
              

              <TouchableOpacity
            style={{
              height:window.height/14,
              width:window.width/2.5,
              borderRadius:window.height/28,
              elevation:7,
              alignSelf:'center',
              backgroundColor:'#F9F8FF',
              justifyContent:'space-evenly',
              flexDirection:'row',
              marginTop:20,
              marginBottom:20,
            }}
            onPress={()=>navigation.navigate("Home")}
            >
            <Image
              style={{
                width: window.height / 40,
                height: window.height / 40,
                alignSelf:'center'
              }}
              source={iconTicketHome}
            />
            <Text
            style={{
              alignSelf:'center'
            }}
            >Go Home</Text>
            </TouchableOpacity>


            </View>
            </View>

            
          </View>
                  
        </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  ticketCard:{
    backgroundColor:'white',
    elevation:10,
    height:window.height/6,
    width:window.width/1.3,
    alignSelf:'center',
    borderRadius:20,
    marginVertical:20,
    flexDirection:'row',
    justifyContent:'space-around',

  },
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
      height:window.height /2.5,
      resizeMode: 'contain',
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
      color:'#00163D',
      
  },
  scrollView: {
    backgroundColor: "#fff"
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
