'use strict';

import moment from "moment";
import React, { Component } from 'react';
import { ActivityIndicator, BackHandler, Dimensions, Platform, Slider, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Orientation from 'react-native-orientation-locker';
import { systemWeights } from 'react-native-typography';
import Video from 'react-native-video';
import ToogleFull from "../assets/icons/exit.png";
import FastImage from "react-native-fast-image";

const window = Dimensions.get('window');

export default class VideoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rate: 1,
      volume: 1,
      muted: false,
      resizeMode: 'contain',
      duration: 0.0,
      currentTime: 0.0,
      paused: false,
      replay:false,
      fullScreen: false,
      loading: false,
      liked: false
    };

  }

  video: Video;

  onLoad = (data) => {
    this.setState({ duration: data.duration });
  };

  onProgress = (data) => {
    this.setState({ currentTime: data.currentTime });
  };

  onEnd = () => {
     this.setState({ replay: true,
    paused:true
   })
  };
  _onBack=()=>{
    Orientation.lockToPortrait()
    this.props.onBack()
  }

  onReplay = () =>{
    this.video.seek(0.0)
    this.setState({
      replay: false,
      paused: false
    })
  }


  onAudioBecomingNoisy = () => {
    this.setState({ paused: true })
  };

  onAudioFocusChanged = (event: { hasAudioFocus: boolean }) => {
    this.setState({ paused: !event.hasAudioFocus })
  };

  getCurrentTimePercentage() {
    if (this.state.currentTime > 0) {
      return parseFloat(this.state.currentTime) / parseFloat(this.state.duration);
    }
    return 0;
  };

  renderRateControl(rate) {
    const isSelected = (this.state.rate === rate);

    return (
      <TouchableOpacity onPress={() => { this.setState({ rate }) }}>
        <Text style={[styles.controlOption, { fontWeight: isSelected ? 'bold' : 'normal' }]}>
          {rate}x
        </Text>
      </TouchableOpacity>
    );
  }

  renderResizeModeControl(resizeMode) {
    const isSelected = (this.state.resizeMode === resizeMode);

    return (
      <TouchableOpacity onPress={() => { this.setState({ resizeMode }) }}>
        <Text style={[styles.controlOption, { fontWeight: isSelected ? 'bold' : 'normal' }]}>
          {resizeMode}
        </Text>
      </TouchableOpacity>
    )
  }

  renderVolumeControl(volume) {
    const isSelected = (this.state.volume === volume);

    return (
      <TouchableOpacity onPress={() => { this.setState({ volume }) }}>
        <Text style={[styles.controlOption, { fontWeight: isSelected ? 'bold' : 'normal' }]}>
          {volume * 100}%
        </Text>
      </TouchableOpacity>
    )
  }

  _toggleScreen=()=>{
    if(this.state.fullScreen)
    {
      this.setState({
        fullScreen: false
      })
      Orientation.lockToPortrait()
    }
    else{
      this.setState({
        fullScreen: true
      })
      Orientation.lockToLandscape()
    }
  }
  _formatTime=(t)=>{
    let formattedTime=
          t<3600000?
          moment
          .utc(t)
          .format("mm:ss")
          :
          moment
          .utc(t)
          .format("hh:mm:ss")

    return formattedTime
  }
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", ()=> {
      this.setState({
        paused:true
      })
      this._onBack()
      return true;
    });
  }

  _tooglePlay = () => {
    this.setState ({
      paused: !this.state.paused
    });
  }

  _toogleLike = () => {
    this.setState ({
      liked: !this.state.liked
    });
  }

  _renderTitle () {
    return (
      <Text
      style={
        this.state.fullScreen
        ? styles.titleFull
        : styles.title
      }
      onPress={()=>{
        this.props.onBack
        this._onBack()
      }}
      >
        Back
      </Text>
    );
  }

  _renderToogleScreen () {
    return (
      <TouchableOpacity
        style={
          this.state.fullScreen
          ? styles.toogleScreenBtnFull
          : styles.toogleScreenBtn
        }
        onPress={()=>{ this._toggleScreen() }}
      >
                  <FastImage
          style={styles.toogleScreenIcon}
          source={ToogleFull}
        />
      </TouchableOpacity>
    );
  }

  render() {
    const flexCompleted = this.getCurrentTimePercentage() * 100;
    const flexRemaining = (1 - this.getCurrentTimePercentage()) * 100;

    return (
      <View
        style={
          this.state.fullScreen
          ? styles.fullScreen
          : styles.container
        }
      >

        {/* full screen status barhidden */}
        {this.state.fullScreen ? (
        <StatusBar hidden />
        ) : null }
        {/* full screen status barhidden */}

        {/* video starts */}
        <View
          style={
            this.state.fullScreen
            ? styles.videoHolderFull
            : styles.videoHolder
          }
        >
          <Video
            ref={(ref: Video) => { this.video = ref }}
            source={{uri: this.props.vSource}}
            style={styles.video}
            // rate={this.state.rate}
            paused={this.state.paused}
            // volume={this.state.volume}
            // muted={this.state.muted}
            resizeMode={'contain'}
            onLoad={this.onLoad}
            onProgress={this.onProgress}
            onEnd={this.onEnd}
            onAudioBecomingNoisy={this.onAudioBecomingNoisy}
            onAudioFocusChanged={this.onAudioFocusChanged}
            repeat={false}
          />
        </View>
        {/* video ends */}

        {/* content starts */}
        <View
          style={
            this.state.fullScreen
            ? styles.contentHolderFull
            : styles.contentHolderSmall
          }
        >
          <View
            style={
              this.state.fullScreen
              ? styles.contentFull
              : styles.contentSmall
            }
          >
            {/*  Header starts  */}
            <View
            style={
              this.state.fullScreen
              ? styles.headerFull
              : styles.header
            }
            >
              {this.state.fullScreen ? (
                this._renderTitle()
                ) : (
                <Text style={{
                  width: window.width * 130 / 1080,
                  height: window.width * 64 / 1080,
                  position: 'absolute',
                  top: window.height / 7-10,
                  left: 10,
                  color:'black',
                  fontWeight:'bold'
                }}
                onPress={this.props.onBack}
                >
                  Back
                </Text>
              )}

              {this.state.fullScreen ? (
                this._renderToogleScreen()
              ) : (
                <View style={styles.headerBtn} />
              )}
            </View>
            {/*  Header ends  */}

            {/*  toogle button small starts  */}
            {this.state.fullScreen ? null : (
              this._renderToogleScreen()
            )}
            {/*  toogle button small ends  */}

            {/*  video title small starts  */}
            {/* {this.state.fullScreen ? null : (
              this._renderTitle()
            )} */}
            {/*  video title small ends  */}


            {/*  controller starts  */}
            <View
              style={
                this.state.fullScreen
                ? styles.controllerHolderFull
                : styles.controllerHolder
              }
            >

              {/* play, pause, loading, replay starts */}
              {this.state.replay ? (
              <TouchableOpacity
                style={[styles.controllerBtn, styles.controllerBtnPlay]}
                onPress={() => { this.onReplay() }}
              >
                  <FastImage
                  style={styles.controllerBtnIconPlay}
                  source={Reload}
                />
              </TouchableOpacity>
              ) :
              this.state.loading ? (
              <ActivityIndicator />
              ) : (
              <TouchableOpacity
                style={[styles.controllerBtn, styles.controllerBtnPlay]}
                onPress={() => { this._tooglePlay() }}
              >
                  <FastImage
                  style={styles.controllerBtnIconPlay}
                  source={this.state.paused ?
                    { 
                      priority: FastImage.priority.high,
                      uri: "ir_player_btn_play" } :
                    { 
                      priority: FastImage.priority.high,
                      uri: "ir_player_btn_pause" }
                  }
                />
              </TouchableOpacity>
              )}
              {/* play, pause, loading, replay ends */}


            </View>
            {/*  controller ends  */}

          </View>

          {/*  full touch starts  */}
          {/* {this.state.fullScreen ? (
            <TouchableOpacity
              style={styles.fullScreenTouch}
            />
          ) : null } */}
          {/*  full touch ends  */}
        </View>
        {/* content ends */}

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    width: window.width,
    height: window.height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.8)'
  },
  fullScreen: {
    width: window.height,
    height: window.width,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000'
  },
  contentHolderFull: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0
  },
  contentHolderSmall: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  contentFull: {
    width: window.height,
    height: window.width,
    backgroundColor: 'rgba(0,0,0,0.2)'
  },
  contentSmall: {
    width: window.width,
    height: window.height-30
  },
  fullScreenTouch: {
    width: window.height,
    height: window.width,
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    left: 0
  },

  // header styles
  header: {
    width: window.width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    position: 'absolute',
    top: Platform.OS === 'ios' ? 25 : 10,
    left: 0
  },
  headerFull: {
    width: window.height,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    position: 'absolute',
    top: Platform.OS === 'ios' ? 25 : 10,
    left: 0
  },
  headerBtn: {
    width: 50
  },
  backBtn: {
    fontSize: 32,
    color: '#707070'
  },
  headerTitle: {
    ...systemWeights.regular,
    fontSize: 16,
    color: "#333",
    textAlign: 'center',
    alignSelf: 'center',
  },

  // video styles
  videoHolder: {
    width: window.width,
    height: window.width * 612 / 1080,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: window.height / 7,
    left: 0,
  },
  videoHolderFull: {
    width: window.height,
    height: window.width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },

  // toogle screen styles
  toogleScreenBtn: {
    width: window.width * 64 / 1080,
    height: window.width * 64 / 1080,
    position: 'absolute',
    top: window.height / 7,
    right: 10
  },
  toogleScreenBtnFull: {
    width: window.width * 64 / 1080,
    height: window.width * 64 / 1080
  },
  toogleScreenIcon: {
    width: window.width * 64 / 1080,
    height: window.width * 64 / 1080
  },

  // video title styles
  title: {
    ...systemWeights.semibold,
    color: '#000',
    fontSize: 24,
    textAlign: 'center',
    width: window.width,
    position: 'absolute',
    top: (window.height / 7) + (window.width * 672 / 1080),
    paddingHorizontal: 10
  },
  titleFull: {
    ...systemWeights.semibold,
    color: 'black',
    fontSize: 24
  },

  // progressbar styles
  sliderHolder: {
    width: window.width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    top: window.height * 2 / 3 + 10,
    paddingHorizontal: 10
  },
  sliderHolderFull: {
    width: window.height,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 30,
    paddingHorizontal: 10
  },
  duration: {
    ...systemWeights.semibold,
    fontSize: 12,
    color: '#333',
  },
  durationFull: {
    ...systemWeights.semibold,
    fontSize: 12,
    color: '#fff',
  },
  barHolder: {
    width: window.width * 3.5 / 5.5
  },
  slider: {
    width: window.width * 3.5 / 5.5,
    height: 20,
    borderRadius: 20
  },
  barHolderFull: {
    width: window.height * 3.5 / 5.5
  },
  sliderFull: {
    width: window.height * 3.5 / 5.5,
    height: 20,
    borderRadius: 20
  },
  track: {
    height: 2,
    backgroundColor: "rgba(255,255,255,0.31)"
  },

  // controller styles
  controllerHolderFull: {
    width: window.height,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0
  },
  controllerHolder: {
    width: window.width,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 30
  },
  controllerBtn: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  controllerBtnIcon: {
    fontSize: 32,
    color: '#333'
  },
  controllerBtnIconFull: {
    fontSize: 32,
    color: '#fff'
  },
  controllerBtnPlay: {
    marginHorizontal: 20
  },
  controllerBtnIconPlay: {
    width: window.width * 160 / 1080,
    height: window.width * 160 / 1080
  },
  controllerBtnIconLiked: {
    fontSize: 35,
    color: '#ff2d55'
  },
  controllerBtnIconLike: {
    fontSize: 35,
    color: '#333'
  },
  controllerBtnIconLikeFull: {
    fontSize: 35,
    color: '#fff'
  }
});
