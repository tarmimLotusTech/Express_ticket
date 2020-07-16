import {
  Platform,
  Dimensions,
  StatusBar
} from "react-native";

import { 
  material,
  systemWeights
} from 'react-native-typography';

const window = Dimensions.get('window');

const X_WIDTH = 375;
const X_HEIGHT = 812;

const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;

const { height, width } = Dimensions.get("window");

const isIPhoneX = () => Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS
  ? width === X_WIDTH && height === X_HEIGHT || width === XSMAX_WIDTH && height === XSMAX_HEIGHT
  : false;

const StatusBarHeight = Platform.select({
  ios: isIPhoneX() ? 44 : 20,
  android: StatusBar.currentHeight,
  default: 0
});

export default {
  loginCont: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: '#F9F9F9'
  },
  loginBG: {
    flex: 1,
    maxWidth: window.width,
    maxHeight: window.height,
    resizeMode: 'cover',
    position: 'absolute'
  },
  loginContent: {
    flex: 1,
    width: window.width,
    height: window.height,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'rgba(249,249,249,0.9)'
  },
  loginEmailTop: {
    width: window.width,
    height: window.height*300/667,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center'
  },
  txtInput: {
    ...systemWeights.light,
    color: '#616161',
    width: window.width*305/375,
    height: window.width*56/375,
    fontSize: 16,
    marginTop:150,
    borderWidth: 1,
    borderColor: '#8d8d8d',
    borderRadius: 10,
    paddingLeft: window.width*28/375,
    marginVertical: 10
  },
  loginEmailBottom: {
    height: window.height*110/667,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center'
  },
  loginBtn: {
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  darkBlueBtn: {
    width: window.width*305/375,
    height: window.width*56/375,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F21C41',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  darkBlueBtnTxt: {
    ...systemWeights.semibold,
    fontSize: 18,
    color: '#fff',
  }
}
 