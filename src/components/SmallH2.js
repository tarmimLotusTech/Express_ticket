import React, { useEffect } from "react";
import {
    FlatList,
    Image,
    Text,
    TouchableOpacity,
    View
} from "react-native";

import GlobalStyles from '../styles/Styles';
import SliderStyles from '../styles/SliderStyles';

export default function SmallH2 (props) {
  useEffect(()=>{},[props])
  function _handlePress(item) {
    console.log(item)
    props.navigation.navigate("EventDetails",{item})
  }

    return (
        <View>
          <Text
            style={[GlobalStyles.headerText,{
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
            return (
              <TouchableOpacity
                onPress={() => _handlePress(rowData)}
                style={SliderStyles.itemSH2}
              >
                <View style={SliderStyles.imageSH2}>
                  <Image
                    style={[GlobalStyles.imgFit,{
                      borderRadius:0,
                      borderTopLeftRadius:20,
                      borderTopRightRadius:20,
                      margin:1
                    }]}
                    source={{uri:rowData.image}}
                  />
                </View>
                <View style={SliderStyles.contentSH2}>
                    <Text style={[GlobalStyles.body2, GlobalStyles.light, GlobalStyles.leftTxt, {color: '#fff'}]}>
                    {rowData.brand}
                    </Text>
                    <Text style={[GlobalStyles.caption, GlobalStyles.medium, GlobalStyles.leftTxt, {color: '#fff'}]}
                    numberOfLines={1}>
                    {rowData.title}
                    </Text>
                </View>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item,index) => {
            return item.id.toString()+new Date().getMilliseconds().toString()+index.toString()}}
            />
        </View>
    );
  }

