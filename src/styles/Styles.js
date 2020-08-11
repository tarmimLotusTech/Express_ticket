import {
  Platform,
  Dimensions
} from "react-native";

const window = Dimensions.get('window');

export default {
    // wraper styles
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
        paddingTop: Platform.OS === 'ios' ? 30 : 0,
    },
    content: {
        width: window.width,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    spacer: {
        marginVertical: 15
    },
    // wraper styles
    headerText:{
        fontWeight:'bold',
        fontSize:15,
        color:'#FADC62',
        marginLeft: 20
      },
    // typo styles
    pageTitle: {
        fontSize: 22
    },
    title: {
        fontSize: 18
    },
    subTitle: {
        fontSize: 16
    },
    caption: {
        fontSize: 12
    },
    body1: {
        fontSize: 12
    },
    body2: {
        fontSize: 8
    },
    bold: {
        fontWeight: '900'
    },
    medium: {
        fontWeight: '700'
    },
    regular: {
        fontWeight: '500'
    },
    light: {
        fontWeight: '300'
    },
    leftTxt: {
        textAlign: 'left'
    },
    rightTxt: {
        textAlign: 'right'
    },
    centerTxt: {
        textAlign: 'center'
    },
    justifyTxt: {
        textAlign: 'justify'
    },
    highlightTxt: {
        color: '#ff0000'
    },
    whiteTxt: {
        color: '#fff'
    },
    // typo styles

    imgFit: {
        resizeMode:'center',
        alignSelf:'center'
    }
};
