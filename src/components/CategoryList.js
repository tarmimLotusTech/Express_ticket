import React from "react";
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
        <View>
          <Text
          style={GlobalStyles.headerText}
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
                // onPress={() => this._handlePress(this.props.itemClick,rowData.id)}
                style={{
                  width: window.width /8 +4,
                  height: window.height / 7,
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginHorizontal: 25,
                  backgroundColor:"#fff",
                  borderRadius:25
                  
              }}
              >
                <View style={{
                  width: window.width /8,
                  height: window.width / 8,
                  margin:2,
                  borderRadius: 25,
                  overflow: 'hidden',
                  marginBottom: 9
              }}>
                  <Image
                    style={GlobalStyles.imgFit}
                    source={{uri:rowData.image}}
                  />
                </View>
                <View style={{
                  width: window.width /8,
                  height: window.width / 8,
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding:5
              }}>
                    <Text style={
                      
                      [ GlobalStyles.centerTxt, {
                        fontWeight:'700',
                        fontSize: 8,
                        color: 'black'
                      }
                      ]}
                    numberOfLines={1}>
                    {rowData.brand}
                    </Text>
                    <Text style={
                      
                      [ GlobalStyles.centerTxt, {
                        fontWeight:'700',
                        fontSize: 20,
                        color: 'black',
                        marginBottom:22
                      }
                      ]}
                    numberOfLines={1}>
                    {"\u21AA"}
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
}

