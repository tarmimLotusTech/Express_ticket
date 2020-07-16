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
                  width: window.width /5,
                  height: window.width /5,
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginHorizontal: 10,
                  backgroundColor:"#4834d4",
                  borderRadius:10,
                  
              }}
              >
                <View style={{
                  width: window.width /5,
                  height: window.width /5,
                  borderRadius: 5,
                  overflow: 'hidden',
                  marginBottom: 9
              }}>
                  <Image
                    style={GlobalStyles.imgFit}
                    source={{uri:rowData.image}}
                  />
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

