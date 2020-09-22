import React from "react";
import {
    FlatList,
    Text,
    TouchableOpacity,
    View,
    Dimensions
} from "react-native";
import { BaseUrl } from "../env";
import FastImage from "react-native-fast-image";

import GlobalStyles from '../styles/Styles';
import SliderStyles from '../styles/SliderStyles';
const window = Dimensions.get('window');

export default class SmallH2 extends React.Component {
  constructor(props) {
    super(props);
  }

  _handlePress(value,id) {
    const pushAction = StackActions.push(value,{id});
    this.props.navigation.dispatch(pushAction)
  }

  render() {
    return (
        <View
        style={{
          marginVertical:5
        }}
        >
          <Text
          style={[GlobalStyles.headerText,{
            marginVertical:20
          }]}
          >
            {this.props.title}
          </Text>
          <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={this.props.data}
          contentContainerStyle={[GlobalStyles.spacer, SliderStyles.holderSH1]}
          renderItem={({ item: rowData }) => {
            return (
              <TouchableOpacity
                style={{
                  width: window.width /5,
                  height: window.width /5,
                  marginHorizontal: 10,
                  backgroundColor:"#1A2A47",
                  borderRadius:5
                  
              }}
              >
                <View style={{
                  width: window.width /5,
                  height: window.width /5,
                  borderRadius: 5,
                  overflow: 'hidden'
              }}>
                  <FastImage
                    style={[GlobalStyles.imgFit,{
                      width: window.width /5,
                      height: window.width /5,    
                    }]}
                    source={{
                      priority: FastImage.priority.high,
                      uri:
                      rowData.cover?
                      BaseUrl+rowData.cover.full:BaseUrl+"/images/logo-app.png"
                  }}
                  />
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
}

