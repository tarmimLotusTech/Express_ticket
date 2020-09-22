import React, { useEffect } from "react";
import {
    FlatList,
    Text,
    TouchableOpacity,
    View,
    Dimensions
} from "react-native";

import GlobalStyles from '../styles/Styles';
import SliderStyles from '../styles/SliderStyles';
const window = Dimensions.get('window');
import { BaseUrl } from "../env";
import FastImage from "react-native-fast-image";

export default function HistorySlider (props) {
  useEffect(()=>{},[props])
  function _handlePress(item) {
      props.navigation.navigate("TicketDetails",{inserted:[item] ,item:item.products[0].detail.pricing[item.products[0].detail.pricing.findIndex(i=>i._id===item.products[0].variation)], eventData:item.products[0].detail})
  }

    return (
        <View
        style={{
          marginVertical:5
        }}
        >
          <Text
            style={[GlobalStyles.headerText,{
              marginVertical:15,
              color: props.darkText? 'black':'#FADC62'
            } ]}
            >
            {props.title}
          </Text>
          <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={props.data}
          contentContainerStyle={[GlobalStyles.spacer, SliderStyles.holderSH1,{
            height:window.width*210/375
          }]}
          renderItem={({ item: rowData }) => {
            return (
              <TouchableOpacity
                onPress={() => _handlePress(rowData)}
                style={{
                  width: window.width * 140 / 375,
                  height: window.width * 200 / 375,
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginHorizontal: 10,
                  backgroundColor:"#001232",
                  borderRadius:15,
                  elevation:6
                }}
              >
                <View style={{
                    width: window.width * 139 / 375,
                    height: window.width * 150 / 375,
                    overflow: 'hidden',
                    marginBottom: 9

                }}>
                  <FastImage
                    style={[{
                      width: window.width * 139 / 375,
                      height: window.width * 150 / 375,
                      resizeMode:'cover',
                      borderTopLeftRadius:15,
                      borderTopRightRadius:15,
                      margin:1
                    }]}
                    source={{
                      priority: FastImage.priority.high,
                      uri:
                      rowData.products[0].detail.cover?
                      BaseUrl+rowData.products[0].detail.cover.full:BaseUrl+"/images/logo-app.png"
                  }}
                  />
                </View>
                <View style={SliderStyles.contentSH2}>
                <Text style={[GlobalStyles.caption, GlobalStyles.medium, GlobalStyles.leftTxt, {color: '#fff'}]}numberOfLines={1}>
                    {rowData.products[0].detail.name}
                    </Text>
                    <Text style={[GlobalStyles.body2, GlobalStyles.light, GlobalStyles.leftTxt, {color: '#fff'}]}>

                    {rowData.products[0].detail.date.split("T")[0]}
                    </Text>
                </View>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item,index) => {
            return item._id.toString()+new Date().getMilliseconds().toString()+index.toString()}}
            />
        </View>
    );
  }

