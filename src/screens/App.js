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
  useEffect(()=>{
    FetchService("GET","/api/category?page=1&limit=2&subCategory=true&sortOrder=-1&sort=added")
    .then(res=>{
      setCategories(res.data)
      FetchService("GET","/api/product?limit=10&page=1&sortOrder=added&sort=-1")
      .then(response=>{
        console.log(response)
        setData(response.data)
        setLoading(false)
      })
    })
    .catch(err=>console.log(err))
  },[])
  const [data,setData]= useState([
    {
      id:"1",
      image: "https://app.imagineradio.io/media/album/art/default.jpg",
      brand:"Bata",
      title:"A great event",
      details:" Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of  (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,  ",
    },
    {
      id:"2",
      image: "https://app.imagineradio.io/media/album/art/default.jpg",
      brand:"Samsung",
      title:"event at ICCB",
      details:" Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of  (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,  ",
    
    },
    {
      id:"3",
      image: "https://app.imagineradio.io/media/album/art/default.jpg",
      brand:"Apple",
      title:"Basundhara city",
      details:" Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of  (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,  ",
    
    },
    {
      id:"4",
      image: "https://app.imagineradio.io/media/album/art/default.jpg",
      brand:"Xiaomi",
      title:"A bad event",
      details:" Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of  (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,  ",
    
    },
    {
      id:"5",
      image: "https://app.imagineradio.io/media/album/art/default.jpg",
      brand:"NMH",
      title:"event at dit",
      details:" Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of  (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,  ",
    
    },
    {
      id:"6",
      image: "https://app.imagineradio.io/media/album/art/default.jpg",
      brand:"DHT",
      title:"Basundhara complex",
      details:" Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of  (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,  ",
    
    }
  ])
  if (loading)
  return <ActivityIndicator/>
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
