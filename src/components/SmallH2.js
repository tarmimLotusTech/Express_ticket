import React, { useEffect } from "react";
import {
    FlatList,
    Image,
    Text,
    TouchableOpacity,
    View,
    Dimensions
} from "react-native";

import GlobalStyles from '../styles/Styles';
import SliderStyles from '../styles/SliderStyles';
const window = Dimensions.get('window');

export default function SmallH2 (props) {
  useEffect(()=>{},[props])
  function _handlePress(id) {
    console.log(id)
    props.navigation.navigate("EventDetails",{id})
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
            return (
              <TouchableOpacity
                onPress={() => _handlePress(rowData._id)}
                style={SliderStyles.itemSH2}
              >
                <View style={{
                    width: window.width * 140 / 375,
                    height: window.width * 150 / 375,
                    overflow: 'hidden',
                    marginBottom: 9
                }}>
                  <Image
                    style={[{
                      
                      flex: 1,
                      width: undefined,
                      height: undefined,
                      resizeMode:'cover',
                      borderTopLeftRadius:20,
                      borderTopRightRadius:20,
                      margin:1
                    }]}
                    source={{uri:rowData.image}}
                  />
                </View>
                <View style={SliderStyles.contentSH2}>
                <Text style={[GlobalStyles.caption, GlobalStyles.medium, GlobalStyles.leftTxt, {color: '#fff'}]}numberOfLines={1}>
                    {rowData.brand}
                    </Text>
                    <Text style={[GlobalStyles.body2, GlobalStyles.light, GlobalStyles.leftTxt, {color: '#fff'}]}>

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

