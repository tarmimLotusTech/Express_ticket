import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import SmallH2 from '../components/SmallH2'
import Slideshow from '../components/Slideshow';
import CategoryList from "../components/CategoryList";
import SmallSquareSlider from "../components/SmallSquareSlider";

const App: () => React$Node = ({navigation}) => {
  const [data,setData]= useState([
    {
      id:"1",
      image: "https://app.imagineradio.io/media/album/art/default.jpg",
      brand:"Bata",
      title:"A great event"
    },
    {
      id:"2",
      image: "https://app.imagineradio.io/media/album/art/default.jpg",
      brand:"Samsung",
      title:"event at ICCB"
    },
    {
      id:"3",
      image: "https://app.imagineradio.io/media/album/art/default.jpg",
      brand:"Apple",
      title:"Basundhara city"
    },
    {
      id:"4",
      image: "https://app.imagineradio.io/media/album/art/default.jpg",
      brand:"Xiaomi",
      title:"A bad event"
    },
    {
      id:"5",
      image: "https://app.imagineradio.io/media/album/art/default.jpg",
      brand:"NMH",
      title:"event at dit"
    },
    {
      id:"6",
      image: "https://app.imagineradio.io/media/album/art/default.jpg",
      brand:"DHT",
      title:"Basundhara complex"
    }
  ])
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
            <Slideshow
            data={data}
            navigation={navigation}
            />
            <CategoryList
            title="Categories"
            navigation={navigation}
            data={data}
            />
            <SmallH2
            data={data}
            navigation={navigation}
            title="Upcoming events"
            />
            <SmallH2
            data={data}
            navigation={navigation}
            title="Popular Now"
            />
            <SmallSquareSlider
            data={data}
            navigation={navigation}
            title="Partners"
            />
          
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#100746",
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

export default App;
