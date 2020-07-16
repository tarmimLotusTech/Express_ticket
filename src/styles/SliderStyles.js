import {
  Dimensions
} from "react-native";

const window = Dimensions.get('window');

export default {
    holderSH1: {
        paddingLeft: 10
    },

    // smallH1
    itemSH1: {
        width: window.width * 270 / 375,
        height: window.width * 88 / 375,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10
    },
    imageSH1: {
        width: window.width * 99 / 375,
        height: window.width * 88 / 375,
        borderRadius: 5,
        overflow: 'hidden',
        marginRight: 9
    },
    contentSH1: {
        width: window.width * 161 / 375,
        height: window.width * 82 / 375,
        justifyContent: 'space-around',
        alignItems: 'flex-start'
    },

    // smallH2
    itemSH2: {
        width: window.width * 123 / 375,
        height: window.width * 159 / 375,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginHorizontal: 10,
        backgroundColor:"#4834d4",
        borderRadius:10,
        borderBottomColor:"#9385f2",
        borderBottomWidth:1,
        borderLeftColor:"#9385f2",
        borderLeftWidth:1,
        
    },
    imageSH2: {
        width: window.width * 123 / 375,
        height: window.width * 120 / 375,
        borderRadius: 5,
        overflow: 'hidden',
        marginBottom: 9
    },
    contentSH2: {
        width: window.width * 123 / 375,
        height: window.width * 30 / 375,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        padding:5
    },

    // mediumH1
    itemMH1: {
        width: window.width * 200 / 375,
        height: window.width * 165 / 375,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginHorizontal: 10
    },
    imageMH1: {
        width: window.width * 200 / 375,
        height: window.width * 120 / 375,
        borderRadius: 5,
        overflow: 'hidden',
        marginBottom: 10
    },
    contentMH1: {
        width: window.width * 200 / 375,
        height: window.width * 35 / 375,
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    offerMH1: {
        width: window.width * 200 / 375,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    priceMH1: {
        width: window.width * 100 / 375,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    // largeH1
    holderLH1: {
        left: -(window.width * 54 / 375)
    },
    itemLH1: {
        width: window.width * 375 / 375,
        height: window.width * 164 / 375,
        borderRadius: 5,
        overflow: 'hidden',
        marginHorizontal: 10,
    },

    // smallH3
    itemSH3: {
        width: window.width * 125 / 375,
        height: window.width * 190 / 375,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        borderRadius: 5,
        overflow: 'hidden',
        borderWidth: 0.5,
        borderColor: '#dedede',
        backgroundColor: '#fff'
    },
    imageSH3: {
        width: window.width * 125 / 375,
        height: window.width * 101 / 375,
    },
    contentSH3: {
        width: window.width * 125 / 375,
        height: window.width * 89 / 375,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: 10
    },
    offerSH3: {
        width: window.width * 45 / 375,
        height: window.width * 22 / 375,
        justifyContent: 'center',
        alignItems: 'center',
        broderBottomRightRadius: 5,
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: '#FC145D'
    },

    // smallH4
    itemSH4: {
        width: window.width * 123 / 375,
        height: window.width * 180 / 375,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10
    },
    imageSH4: {
        width: window.width * 123 / 375,
        height: window.width * 120 / 375,
        borderRadius: 5,
        overflow: 'hidden'
    },
    offerSH4: {
        width: window.width * 123 / 375,
        height: window.width * 25 / 375,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    couponSH4: {
        width: window.width * 123 / 375,
        height: window.width * 25 / 375,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FC3775',
        borderRadius: 2,
    },

    // smallB1
    itemB1: {
        width: window.width * 80 / 375,
        height: window.width * 80 / 375,
        borderRadius: 5,
        overflow: 'hidden',
        marginHorizontal: 10
    },
};
