import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Dimensions,
  StatusBar,
  Text,
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
      title:"Movies",
      events:[
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

        }
  ]
},
{
  title:"Concerts",
  events:[
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

    }
]
},
{
  title:"Conferences",
  events:[
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

    }
]
},
{
  title:"Parties",
  events:[
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

    }
]
},
{
  title:"Movies",
  events:[
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

    }
]
}

])
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ScrollView
      style={styles.scrollView}
      >
        <View
        style={{
          height:window.height/8,
          width:window.width,
          backgroundColor:"#313E55",
          justifyContent:'center',
          marginBottom:30
        }}
        >
          <Text
        style={{
          fontWeight:'bold',
          fontSize:20,
          color:'white',
          alignSelf:'center'
        }}
        >All categories </Text>
        </View>
        
        {
        data.map((item)=>
          <VerticalCardSlider
            data={item.events}
            navigation={navigation}
            darkText
            title={item.title}
            />
        )
      }
        
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
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
