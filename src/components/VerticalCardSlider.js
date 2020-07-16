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

export default class VerticalCardSlider extends React.Component {
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
          showsHorizontalScrollIndicator={false}
          numColumns={3}
          data={this.props.data}
          contentContainerStyle={[GlobalStyles.spacer, SliderStyles.holderSH1]}
          renderItem={({ item: rowData }) => {
            return (
              <TouchableOpacity
                // onPress={() => this._handlePress(this.props.itemClick,rowData.id)}
                style={{
                  width: window.width * 90 / 375,
                  height: window.width * 150 / 375,
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginHorizontal: 14,
                  marginVertical:20,
                  backgroundColor:"#4834d4",
                  borderRadius:10
                  
              }}
              >
                <View style={{
                  width: window.width * 90 / 375,
                  height: window.width * 120 / 375,
                  borderRadius: 5,
                  overflow: 'hidden'
              }}>
                  <Image
                    style={GlobalStyles.imgFit}
                    source={{uri:rowData.image}}
                  />
                </View>
                <View style={{
                width: window.width * 90 / 375,
                height: window.width * 20 / 375,
                justifyContent: 'center',
                paddingBottom:10,
                paddingLeft:5,
                alignItems: 'flex-start',
            }}>
                    <Text style={[ {
                      fontSize:5,
                      color: '#fff',
                      fontWeight: '300'
                      }]}>
                    {rowData.brand}
                    </Text>
                    <Text style={[ {
                      fontSize:8,
                      color: '#fff',
                      fontWeight: '700'
                    }]}
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
}

