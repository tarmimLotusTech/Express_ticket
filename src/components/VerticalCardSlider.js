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
import { BaseUrl } from "../env";
const window = Dimensions.get('window');

export default class VerticalCardSlider extends React.Component {
  constructor(props) {
    super(props);
  }

  _handlePress(id) {
    this.props.navigation.navigate("EventDetails",{id})
  }

  render() {
    return (
        <View>
          <Text
          style={[GlobalStyles.headerText,{
            color: this.props.darkText? 'black':'#FADC62'
          } ]}
          >
            {this.props.title}
          </Text>
          {
            this.props.viewMore?
            <Text
              style={{
                alignSelf:'flex-end',
                marginRight:20,
                marginTop:-20,
                fontSize:12,
                fontWeight:'bold'
              }}
              onPress={()=>this.props.navigation.navigate("CategoryDetails",{id:this.props.title})}
              >See all</Text>:<View/>
          }
          
          <FlatList
          showsHorizontalScrollIndicator={false}
          numColumns={3}
          ListFooterComponent={()=><View
          /> }
          data={this.props.data}
          contentContainerStyle={[GlobalStyles.spacer, SliderStyles.holderSH1]}
          renderItem={({ item: rowData }) => {
            return (
              <TouchableOpacity
                onPress={() => this._handlePress(rowData._id)}
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
                {rowData.brand}
                </Text>
                <Text style={[ {
                  fontSize:5,
                  color: '#fff',
                  fontWeight: '300'
                  }]}>
                {rowData.name}
                </Text>
                    
                </View>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item,index) => {
            return new Date().getMilliseconds().toString()+index.toString()}}
            />
        </View>
    );
  }
}

