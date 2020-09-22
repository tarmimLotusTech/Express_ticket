import React from "react";
import {
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    View,
    Text
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import FastImage from "react-native-fast-image";

import ImageSlider from 'react-native-image-slider';
import { BaseUrl } from "../env";

const window = Dimensions.get('window');

export default class Slideshow extends React.Component {
  constructor(props) {
    super(props);
  }
  _handlePress(id) {
      this.props.navigation.navigate("EventDetails",{id})

  }
  render() {
    const slides = this.props.data;
    return (
        <View style={styles.slideShow}>
            <ImageSlider
                loopBothSides
                loop
                autoPlayWithInterval={2000}
                images={slides}
                customSlide={({index, style, item}) => (
                    
                    <View
                    style={[style, styles.slideHolder]}
                    >
                      <FastImage
                            source={{
                                priority: FastImage.priority.high,
                                uri:
                                item.cover?
                                BaseUrl+item.cover.full:BaseUrl+"/images/logo-app.png"
                            }}
                            style={styles.imgFit}
                        />
                        {/* <Text
                        style={[{
                            top:window.height/3.5,
                        }, styles.sliderTextAbsolute,styles.sliderLargeText]}
                        >
                            {item.name}
                        </Text>
                        <Text
                            style={[{
                                top:window.height/3.5 +25
                            }, styles.sliderTextAbsolute]}
                            >
                                {item.model}
                        </Text>
                        <TouchableOpacity
                        key={index}
                        onPress={() => this._handlePress(item._id)}
                        >

                        <View
                        style={{
                            height:window.width * 50/ 375,
                            backgroundColor:'#1A2A47',
                            borderBottomLeftRadius:25,
                            borderBottomRightRadius:25,
                            justifyContent:'center',
                            alignItems:'center'
                        }}
                        >
                            <Text
                            style={styles.sliderLargeText}
                            >
                                Get your tickets
                            </Text>
                        </View>
                        </TouchableOpacity> */}
                        <LinearGradient
                            colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.5)']}
                            style={{
                                position:'absolute',
                                top:window.height/5.4,
                                width:window.width,
                                height:window.height/4,
                                justifyContent:'space-between'
                            }}
                            >
                        <View
                        style={{
                            marginTop:window.height/7,
                            height:window.height/11,
                            marginLeft:window.width/15,
                            justifyContent:'space-evenly'

                        }}
                        >
                        <Text
                            style={{
                                fontSize:20,
                                fontWeight:'700',
                                color:'#fff',
                            }}
                        >
                            {item.name}
                        </Text>
                        <Text
                            style={{
                            fontSize:12,
                            color:'#fff',
                            }}
                            >
                            venue: {item.venue}
                        </Text>
                        </View>
                        <TouchableOpacity
                        key={index}
                        onPress={() => this._handlePress(item._id)}
                        >

                        <View
                        style={{
                            height:window.width * 50/ 375,
                            backgroundColor:'#1A2A47',
                            borderBottomLeftRadius:25,
                            borderBottomRightRadius:25,
                            justifyContent:'center',
                            alignItems:'center'
                        }}
                        >
                            <Text
                            style={styles.sliderLargeText}
                            >
                                Get your tickets
                            </Text>
                        </View>
                        </TouchableOpacity>
                        </LinearGradient>
                    </View>
                )}
                customButtons={() => (
                    <View/>
                )}
                style={{
                    backgroundColor:'#00163D'
                }}
            />
        </View>
    );
  }
}
const styles = StyleSheet.create({
    slideShow: {
        width: window.width,
        height: window.height /2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slideHolder: {
        width: window.width,
        height: window.height /2.2
    },
    imgFit: {
        flex: 1,
        width: undefined,
        height: undefined,
        resizeMode: 'cover'
    },
    indicatorHolder: {
        width: window.width * 42 / 375,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        alignSelf: 'center',
        position: 'absolute',
        bottom: 10,
        marginHorizontal: 'auto'
    },
    indicator: {
        width: window.width * 4 / 375,
        height: window.width * 4 / 375,
        borderRadius: window.width * 2 / 375,
        backgroundColor: '#fff'
      },
    indicatorSelected: {
        width: window.width * 12 / 375,
        height: window.width * 4 / 375,
        borderRadius: window.width * 2 / 375,
        backgroundColor: '#fff'
    },
    sliderLargeText: {
        fontSize:18,
        color:'white',
        fontWeight:'700'
    },
    sliderTextAbsolute: {
        position:"absolute",
        color:'white',
        left:window.width/12,
        
    }
});