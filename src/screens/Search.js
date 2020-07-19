import React, { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Dimensions,
  StatusBar,
  Text,
  View,
  TextInput,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity
} from 'react-native';
const window = Dimensions.get('window');
import { 
  systemWeights
} from 'react-native-typography';
import iconSearchDark from '../assets/icons/iconSearchDark.png';
import SliderStyles from '../styles/SliderStyles';
import GlobalStyles from '../styles/Styles';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const searchData=[
  {
    id:1,
    title:"Movies",
    events:[
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
        brand:"Bata",
        title:"A great event",
        details:" A great event A great event A great event A great event A great event A great event A great event A great event A great eventA great event A great event A great event A great event  A great event  A great event  A great event ",
    
      },
      {
        id:"5",
        image: "https://app.imagineradio.io/media/album/art/default.jpg",
        brand:"Samsung",
        title:"event at ICCB",
        details:" A great event A great event A great event A great event A great event A great event A great event A great event A great eventA great event A great event A great event A great event  A great event  A great event  A great event ",
    
      },
      {
        id:"6",
        image: "https://app.imagineradio.io/media/album/art/default.jpg",
        brand:"Apple",
        title:"Basundhara city",
        details:" A great event A great event A great event A great event A great event A great event A great event A great event A great eventA great event A great event A great event A great event  A great event  A great event  A great event ",
    
      }
]
},
{
id:2,
title:"Concerts",
events:[
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

  }
]
},
{
id:3,
title:"Conferences",
events:[
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

  }
]
},
{
id:4,
title:"Parties",
events:[
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

  }
]
},
{
id:5,
title:"Movies",
events:[
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

  }
]
}

]

const CategoryDetails: () => React$Node = ({navigation}) => {
  const [searchtext, setSearchText]=useState('')
  const [viewHeight,setViewHeight]=useState(window.width-30)
  const [data,setData]= useState([])
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <KeyboardAvoidingView
      style={styles.scrollView}
      >
        <View
        style={{
          height:window.height/8,
          width:window.width,
          backgroundColor:"#100746",
          justifyContent:'center',
          marginBottom:30
        }}
        >
          <Text
        style={{
          fontWeight:'bold',
          fontSize:20,
          color:'white',
          alignSelf:'center'
        }}
        >Search </Text>
        </View>
        <View
        style={{
          backgroundColor:"#fff",
          height:viewHeight,
          width:window.width-30,
          alignSelf:'center',
          borderRadius:20,
          borderBottomColor:'grey',
          borderBottomWidth:2,
          borderLeftColor:'grey',
          borderLeftWidth:2,
          justifyContent:'center',
          alignItems:'center'
        }}
        >
          <View
          style={{
            flexDirection:'row',
            height: window.width*56/375,
            width:window.width-40,
            borderRadius:15,
            borderColor:'grey',
            borderWidth:1,
            alignSelf:'center'
          }}
          >
          <TextInput
            underlineColorAndroid="transparent"
            placeholderTextColor="#212121"
            placeholder="  Search"
            onFocus={()=>setViewHeight(window.width*66/375)}
            autoFocus={true}
            value={searchtext}
            keyboardType="default"
            style={styles.txtInput}
            onChangeText={
            (t)=>{
              setSearchText(t)
              if (!t){
                setData([])
              }
              else {
                setData(searchData[0].events)}
              }
            }
            blurOnSubmit={false}
            // onBlur={()=>setViewHeight(window.width/2)}
          />
          <Image
					style={styles.footerIcon}
					source={iconSearchDark}
				  />
        </View>
        </View>
        <FlatList
          data={data}
          contentContainerStyle={[GlobalStyles.spacer, SliderStyles.holderSH1]}
          ListFooterComponent={()=><View
          
          style={{
            height:120
          }}/>}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate("EventDetails",{item})}
                style={{
                  width: window.width -40,
                  height: window.width * 80 / 375,
                  justifyContent: 'space-between',
                  marginVertical:10,
                  alignItems: 'flex-start',
                  marginHorizontal: 10,
                  backgroundColor:"#fff",
                  borderRadius:10,
                  borderBottomColor:"#95a5a6",
                  borderBottomWidth:1,
                  borderLeftColor:"#95a5a6",
                  borderLeftWidth:1,
                  flexDirection: 'row'
              }}
              >
                <View style={{
                  width: window.width * 70 / 375,
                  height: window.width * 70 / 375,
                  borderRadius: 5,
                  margin:5,
                  overflow: 'hidden',
              }}>
                  <Image
                    style={{
                      flex: 1,
                      width: undefined,
                      height: undefined,
                      resizeMode: 'cover',
                      borderRadius:8
                  }}
                    source={{uri:item.image}}
                  />
                </View>
                <View style={{
                  width: window.width -40,
                  height: window.width * 70 / 375,
                  justifyContent: 'flex-end',
                  alignItems: 'flex-start',
                  padding:5
                }}>
                    <Text style={[GlobalStyles.body2, GlobalStyles.light, GlobalStyles.leftTxt, {color: '#100746'}]}>
                    {item.brand}
                    </Text>
                    <Text style={[GlobalStyles.caption, GlobalStyles.medium, GlobalStyles.leftTxt, {color: '#100746'}]}
                    numberOfLines={1}>
                    {item.title}
                    </Text>
                </View>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item,index) => {
            return item.id.toString()+new Date().getMilliseconds().toString()+index.toString()}}
            />
        
        
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  footerIcon: {
		width: window.height / 30,
		height: window.height / 30,
    margin:15
	},
  searchBar:{
    borderWidth: 1,
    borderColor: '#8d8d8d',
    borderRadius: 10,
  },
  txtInput: {
    ...systemWeights.light,
    color: '#616161',
    width: window.width*290/375,
    height: window.width*56/375,
    fontSize: 16,
    paddingLeft: window.width*28/375,
    marginVertical: 10,
    alignSelf:'center'
  },
  scrollView: {
    backgroundColor: "#313E55",
    height:window.height
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
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default CategoryDetails;