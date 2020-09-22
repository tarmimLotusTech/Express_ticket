import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  ActivityIndicator,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import SmallH2 from '../components/SmallH2'
import Slideshow from '../components/Slideshow';
import CategoryList from "../components/CategoryList";
import SmallSquareSlider from "../components/SmallSquareSlider";
import FetchService from '../services/FetchService';

const App: () => React$Node = ({navigation}) => {
  const [ categories, setCategories]=useState([])
  const [loading, setLoading] = useState(true)
  const [ offerData , setOfferData ] = useState([])
  const [ brandData , setBrandData ] = useState([])
  useEffect(()=>{
    FetchService("GET","/api/category")
    .then(res=>setCategories(res.data))
    .then(()=>FetchService("GET","/api/product"))
    .then(response=>setData(response.data))
    .then(()=>FetchService("GET","/api/product/popular"))
    .then(response=>setOfferData(response.data))
    .then(()=>FetchService("GET","/api/brand/?image=1"))
    .then(response=>setBrandData(response.data))
    .then(()=>setLoading(false))
    .catch(err=>console.log(err))
  },[navigation])
  const [data,setData]= useState([])
  if (loading)
  return <ActivityIndicator size="large" color="#00163D" style={{
    alignSelf:'center',
    marginTop:'80%'
  }} />
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
            data={categories}
            />
            <SmallH2
            data={data}
            navigation={navigation}
            title="Upcoming events"
            />
            <SmallH2
            data={offerData}
            navigation={navigation}
            title="Popular Now"
            />
            <SmallSquareSlider
            data={brandData}
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
    backgroundColor: "#00163D",
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
