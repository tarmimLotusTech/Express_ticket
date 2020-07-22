import React from "react";
import {
    Dimensions,
    Image,
    StyleSheet,
    TouchableOpacity,
    View,
    Text
} from "react-native";

import ImageSlider from 'react-native-image-slider';

const window = Dimensions.get('window');

export default class Slideshow extends React.Component {
  constructor(props) {
    super(props);
  }
  _handlePress(item) {
      this.props.navigation.navigate("EventDetails",{item})

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
                        <Image
                            source={{uri:item.image}}
                            style={styles.imgFit}
                        />
                        <Text
                        style={[{
                            top:window.height/3.5,
                        }, styles.sliderTextAbsolute,styles.sliderLargeText]}
                        >
                            {item.brand}
                        </Text>
                        <Text
                            style={[{
                                top:window.height/3.5 +25
                            }, styles.sliderTextAbsolute]}
                            >
                                {item.title}
                        </Text>
                        <TouchableOpacity
                        key={index}
                        onPress={() => this._handlePress(item)}
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
                    </View>
                )}
                customButtons={() => (
                    <View/>
                )}
                style={{
                    backgroundColor:'#00102D'
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
        fontSize:20,
        color:'white',
        fontWeight:'700'
    },
    sliderTextAbsolute: {
        position:"absolute",
        color:'white',
        left:window.width/12,
        
    }
});