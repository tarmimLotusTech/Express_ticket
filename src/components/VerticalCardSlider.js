import React, { useEffect, useState } from "react";
import {
    FlatList,
    Image,
    Text,
    TouchableOpacity,
    View,
    Dimensions,
    ActivityIndicator
} from "react-native";

import GlobalStyles from '../styles/Styles';
import SliderStyles from '../styles/SliderStyles';
import { BaseUrl } from "../env";
import FetchService from '../services/FetchService';

const window = Dimensions.get('window');

export default function VerticalCardSlider (props) {
  useEffect(()=>{
    FetchService("GET",`/api/category/${props.id}/product?limit=${props.limit}&page=1&recursive=true&sortOrder=-1&sort=added`)
        .then(products=>setData(products.data))
        .then(()=>setLoading(false))
  },[props])
  const [loading, setLoading]=useState(true)
  const [data,setData]=useState([])
  function _handlePress(id) {
    props.navigation.navigate("EventDetails",{id})
  }
    if (loading)
    return <ActivityIndicator/>

    return (
        data.length>0?<View>
        <Text
        style={[GlobalStyles.headerText,{
          color: props.darkText? '#00102D':'#FADC62'
        } ]}
        >
          {props.title}
        </Text>
        {
          props.viewMore?
          <Text
            style={{
              alignSelf:'flex-end',
              marginRight:20,
              marginTop:-20,
              fontSize:12,
              fontWeight:'bold'
            }}
            onPress={()=>props.navigation.navigate("CategoryDetails",{id:props.id,name:props.title})}
            >See all</Text>:<View/>
        }
        
        <FlatList
        showsHorizontalScrollIndicator={false}
        numColumns={3}
        ListFooterComponent={()=><View
        /> }
        data={data}
        contentContainerStyle={[GlobalStyles.spacer, SliderStyles.holderSH1]}
        renderItem={({ item: rowData }) => {
          return (
            <TouchableOpacity
              onPress={() => _handlePress(rowData._id)}
              style={{
                width: window.width * 103 / 375,
                height: window.width * 150 / 375,
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginHorizontal: 7,
                marginTop:10,
                backgroundColor:"#001232",
                borderRadius:7,
                marginBottom:20

                
            }}
            >
              <View style={{
                width: window.width * 103 / 375,
                height: window.width * 120 / 375,
                borderRadius: 5,
                overflow: 'hidden'
            }}>
                <Image
                  style={GlobalStyles.imgFit}
                  source={{uri:BaseUrl+rowData.cover.full}}
                />
              </View>
              <View style={{
              width: window.width * 103 / 375,
              height: window.width * 20 / 375,
              justifyContent: 'center',
              paddingBottom:10,
              paddingLeft:5,
              alignItems: 'flex-start',
          }}>
              <Text style={[ {
                fontSize:8,
                color: '#fff',
                fontWeight: '700'
              }]}
              numberOfLines={1}>
              {rowData.name}
              </Text>
              <Text style={[ {
                fontSize:5,
                color: '#fff',
                fontWeight: '300'
                }]}>
              {rowData.model}
              </Text>
                  
              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item,index) => {
          return new Date().getMilliseconds().toString()+index.toString()}}
          />
      </View>:<View
      style={{
        height:window.height,
        justifyContent:'center',
        alignItems:'center',
      }}
      >
        <Text
        numberOfLines={2}
        style={{
          fontSize:20,
          textAlign:'center',
          width:window.width/1.5
        }}
        >No {props.title} are happening now</Text>
      </View>
    );
  }


