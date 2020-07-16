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
  _handlePress(id) {
      console.log(id)

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
                            top:window.height/5,
                        }, styles.sliderTextAbsolute,styles.sliderLargeText]}
                        >
                            {item.brand}
                        </Text>
                        <Text
                            style={[{
                                top:window.height/5 +25
                            }, styles.sliderTextAbsolute]}
                            >
                                {item.title}
                            </Text>
                        <TouchableOpacity
                        key={index}
                        onPress={() => this._handlePress(item.id)}
                        >

                        <View
                        style={{
                            height:window.width * 70/ 375,
                            backgroundColor:'#4834d4',
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
                customButtons={(position, move) => (
                    <View style={styles.indicatorHolder}>
                    {slides.map((slide, index) => {
                        return (
                        <TouchableOpacity
                            key={index}
                            underlayColor="transparent"
                            onPress={() => move(index)}
                            style={styles.indicator}
                        >
                            <View
                                style={position === index && styles.indicatorSelected}
                            />
                        </TouchableOpacity>
                        );
                    })}
                    </View>
                )}
                style={{
                    backgroundColor:'#100746'
                }}
            />
        </View>
    );
  }
}
const styles = StyleSheet.create({
    slideShow: {
        width: window.width,
        height: window.height /2.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slideHolder: {
        width: window.width,
        height: window.height /2.5
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
        left:window.width/3,
        
    }
});