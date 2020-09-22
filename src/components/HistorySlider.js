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
import FetchService from "../services/FetchService";
const window = Dimensions.get('window');

export default function HistorySlider (props) {
  useEffect(()=>{},[props])
  function _handlePress(item) {
    FetchService("GET",'/api/product/'+item.products[0]._id)
    .then(response=>{
      props.navigation.navigate("TicketDetails",{inserted:[item] ,item:response.pricing[response.pricing.findIndex(i=>i._id===item.products[0].variation)], eventData:response})
    })
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
          contentContainerStyle={[GlobalStyles.spacer, SliderStyles.holderSH1]}
          renderItem={({ item: rowData }) => {
            let addrStr= rowData.address.address1 +" "+ rowData.address.address2 +"\n"+ rowData.address.city +" "+ rowData.address.country
            return (
              <TouchableOpacity
                onPress={() => _handlePress(rowData)}
                style={{
                  width: window.width * 140 / 375,
                  height: window.width /4,
                  alignItems: 'flex-start',
                  marginHorizontal: 10,
                  backgroundColor:"#001232",
                  borderRadius:10,
                  padding:10
              }}
              >
                    <Text style={[GlobalStyles.caption, GlobalStyles.medium, GlobalStyles.leftTxt, {color: '#fff'}]}numberOfLines={1}>
                    {rowData.added.split("T")[0]}
                    </Text>
                    <Text style={[GlobalStyles.caption, GlobalStyles.medium, GlobalStyles.leftTxt, {color: '#fff'}]}
                    >
                    Address:
                    </Text>
                    <Text style={[GlobalStyles.body2, GlobalStyles.light, GlobalStyles.leftTxt, {color: '#fff'}]}
                    numberOfLines={2}
                    >
                    {addrStr}
                    </Text>
                    <Text style={[GlobalStyles.caption, GlobalStyles.medium, GlobalStyles.leftTxt, {color: '#fff'}]}numberOfLines={1}>
                    {rowData.totalPrice} $
                    </Text>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item,index) => {
            return item._id.toString()+new Date().getMilliseconds().toString()+index.toString()}}
            />
        </View>
    );
  }

