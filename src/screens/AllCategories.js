import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  StyleSheet,
  Dimensions,
  StatusBar,
  ActivityIndicator
} from 'react-native';
const window = Dimensions.get('window');

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import VerticalCardSlider from "../components/VerticalCardSlider";
import FetchService from '../services/FetchService';

const CategoryDetails: () => React$Node = ({navigation}) => {
  useEffect(()=>{
    FetchService("GET","/api/category?page=1&limit=10&subCategory=false&sortOrder=-1&sort=added")
    .then(async res=>setData(res.data))
    .then(()=>setLoading(false))

  },[navigation])

  const [loading,setLoading]=useState(true)
  const [data,setData]=useState([])
if (loading)
return <ActivityIndicator size="large" color="#00163D" style={{
    alignSelf:'center',
    marginTop:'80%'
  }} />
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ScrollView
      style={styles.scrollView}
      >        
        {
        data.map((item)=>
          <VerticalCardSlider
            id={item._id}
            limit={3}
            navigation={navigation}
            darkText
            viewMore
            title={item.name}
            />
        )
      }
        
      </ScrollView>
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
