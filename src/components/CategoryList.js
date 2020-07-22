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
            style={[GlobalStyles.headerText,{
              marginVertical:10,
              color: this.props.darkText? 'black':'#FADC62'
            } ]}
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
                onPress={() => this.props.navigation.navigate("CategoryDetails",{id:rowData._id})}
                style={{
                  borderColor:'#00163D',
                  borderWidth:1,
                  width: window.width /6,
                  height: window.height / 5,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  margin:8,
                  backgroundColor:"#bdc3c7",
                  borderRadius:window.width / 14
                  
              }}
              >
                <View style={{
                  width: window.width /6 +8,
                  height: window.width / 6 +8,
                  borderRadius: window.width / 12 +3,
                  overflow: 'hidden',
                  marginTop:-3,
                  borderWidth:2,
                  backgroundColor:"#001A48",
                  justifyContent:'center',
                  borderColor:'#00163D',
                  alignItems:'center'
              }}>
                  <Image
                    style={{
                      width: window.width/20,
                      height: window.width/20,
                      resizeMode: 'contain',
                  }}
                    source={require('../assets/icons/iconProfile.png')}
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
                        color: 'black',
                        marginBottom:10
                      }
                      ]}
                    numberOfLines={1}>
                    {rowData.name}
                    </Text>
                    <Image
                    style={{
                      width: window.width/25,
                      height: window.width/25,
                      resizeMode: 'contain',
                      marginTop:5,
                      marginBottom:15
                    }}
                    source={require('../assets/icons/nextIconHome.png')}
                  />
                    {/* <Text style={
                      
                      [ GlobalStyles.centerTxt, {
                        fontWeight:'700',
                        fontSize: 20,
                        color: 'black',
                        marginBottom:22
                      }
                      ]}
                    numberOfLines={1}>
                    {"\u21AA"}
                    </Text> */}
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

