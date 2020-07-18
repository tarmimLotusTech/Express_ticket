import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  StatusBar,
  View
} from 'react-native';
const window = Dimensions.get('window');

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import VerticalCardSlider from "../components/VerticalCardSlider";

const CategoryDetails: () => React$Node = ({navigation}) => {
  const [data,setData]= useState([
    {
      id:"1",
      image: "https://app.imagineradio.io/media/album/art/default.jpg",
      brand:"Bata",
      title:"A great event",
      details:" A great event A great event A great event A great event A great event A great event A great event A great event A great eventA great event A great event A great event A great event  A great event  A great event  A great event ",

    },
    {
      id:"2",
      image: "https://app.imagineradio.io/media/album/art/default.jpg",
      brand:"Samsung",
      title:"event at ICCB",
      details:" A great event A great event A great event A great event A great event A great event A great event A great event A great eventA great event A great event A great event A great event  A great event  A great event  A great event ",

    },
    {
      id:"3",
      image: "https://app.imagineradio.io/media/album/art/default.jpg",
      brand:"Apple",
      title:"Basundhara city",
      details:" A great event A great event A great event A great event A great event A great event A great event A great event A great eventA great event A great event A great event A great event  A great event  A great event  A great event ",

    },
    {
      id:"4",
      image: "https://app.imagineradio.io/media/album/art/default.jpg",
      brand:"Xiaomi",
      title:"A bad event",
      details:" A great event A great event A great event A great event A great event A great event A great event A great event A great eventA great event A great event A great event A great event  A great event  A great event  A great event ",

    },
    {
      id:"5",
      image: "https://app.imagineradio.io/media/album/art/default.jpg",
      brand:"NMH",
      title:"event at dit",
      details:" A great event A great event A great event A great event A great event A great event A great event A great event A great eventA great event A great event A great event A great event  A great event  A great event  A great event ",

    },{
      id:"6",
      image: "https://app.imagineradio.io/media/album/art/default.jpg",
      brand:"Bata",
      title:"A great event",
      details:" A great event A great event A great event A great event A great event A great event A great event A great event A great eventA great event A great event A great event A great event  A great event  A great event  A great event ",

    },
    {
      id:"7",
      image: "https://app.imagineradio.io/media/album/art/default.jpg",
      brand:"Samsung",
      title:"event at ICCB",
      details:" A great event A great event A great event A great event A great event A great event A great event A great event A great eventA great event A great event A great event A great event  A great event  A great event  A great event ",

    },
    {
      id:"8",
      image: "https://app.imagineradio.io/media/album/art/default.jpg",
      brand:"Apple",
      title:"Basundhara city",
      details:" A great event A great event A great event A great event A great event A great event A great event A great event A great eventA great event A great event A great event A great event  A great event  A great event  A great event ",

    },
    {
      id:"9",
      image: "https://app.imagineradio.io/media/album/art/default.jpg",
      brand:"Xiaomi",
      title:"A bad event",
      details:" A great event A great event A great event A great event A great event A great event A great event A great event A great eventA great event A great event A great event A great event  A great event  A great event  A great event ",

    },
    {
      id:"10",
      image: "https://app.imagineradio.io/media/album/art/default.jpg",
      brand:"NMH",
      title:"event at dit",
      details:" A great event A great event A great event A great event A great event A great event A great event A great event A great eventA great event A great event A great event A great event  A great event  A great event  A great event ",

    },{
      id:"11",
      image: "https://app.imagineradio.io/media/album/art/default.jpg",
      brand:"Bata",
      title:"A great event",
      details:" A great event A great event A great event A great event A great event A great event A great event A great event A great eventA great event A great event A great event A great event  A great event  A great event  A great event ",

    },
    {
      id:"12",
      image: "https://app.imagineradio.io/media/album/art/default.jpg",
      brand:"Samsung",
      title:"event at ICCB",
      details:" A great event A great event A great event A great event A great event A great event A great event A great event A great eventA great event A great event A great event A great event  A great event  A great event  A great event ",

    },
    {
      id:"13",
      image: "https://app.imagineradio.io/media/album/art/default.jpg",
      brand:"Apple",
      title:"Basundhara city",
      details:" A great event A great event A great event A great event A great event A great event A great event A great event A great eventA great event A great event A great event A great event  A great event  A great event  A great event ",

    },
    {
      id:"14",
      image: "https://app.imagineradio.io/media/album/art/default.jpg",
      brand:"Xiaomi",
      title:"A bad event",
      details:" A great event A great event A great event A great event A great event A great event A great event A great event A great eventA great event A great event A great event A great event  A great event  A great event  A great event ",

    },
    {
      id:"15",
      image: "https://app.imagineradio.io/media/album/art/default.jpg",
      brand:"NMH",
      title:"event at dit",
      details:" A great event A great event A great event A great event A great event A great event A great event A great event A great eventA great event A great event A great event A great event  A great event  A great event  A great event ",

    },
    {
      id:"16",
      image: "https://app.imagineradio.io/media/album/art/default.jpg",
      brand:"dhaka lir fest",
      title:"Basundhara complex",
      details:" A great event A great event A great event A great event A great event A great event A great event A great event A great eventA great event A great event A great event A great event  A great event  A great event  A great event ",
    }
  ])
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
      style={styles.scrollView}
      >
        <VerticalCardSlider
        data={data}
        navigation={navigation}
        darkText
        title={navigation.state.params.id}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    paddingTop:20,
    backgroundColor: "#fff",
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default CategoryDetails;