import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  StatusBar
} from 'react-native';
const window = Dimensions.get('window');
import SendAnalytics from '../services/SendAnalytics';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import VerticalCardSlider from "../components/VerticalCardSlider";

const CategoryDetails: () => React$Node = ({navigation}) => {
  const {id}=navigation.state.params
  useEffect(()=>{
    SendAnalytics(navigation,id,'category')
  },[navigation])
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
      style={styles.scrollView}
      >
        <VerticalCardSlider
        id={navigation.state.params.id}
        navigation={navigation}
        darkText
        limit={15}
        title={navigation.state.params.name}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    paddingTop:20,
    paddingBottom:50,
    backgroundColor: "#fff",
    minHeight:window.height
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
