import React, { Component } from 'react';
import {
  FlatList,
  StyleSheet,
  Dimensions,
  StatusBar,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity
} from 'react-native';
const window = Dimensions.get('window');
import { 
  systemWeights
} from 'react-native-typography';
import SliderStyles from '../styles/SliderStyles';
import GlobalStyles from '../styles/Styles';
import {Picker} from '@react-native-community/picker';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const searchData=[
      {
        id:"1",
        image: "https://app.imagineradio.io/media/album/art/default.jpg",
        brand:"Bata",
        date:"10-10-20",
        city:'Dhaka',
        title:"Dhaka-10-sports",
        details:" Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of  (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,  ",
        type:"sports"
      },
      {
        id:"2",
        image: "https://app.imagineradio.io/media/album/art/default.jpg",
        brand:"Bata",
        date:"11-10-20",
        city:'Dhaka',
        title:"Dhaka-11-sports",
        details:" Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of  (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,  ",
        type:"sports"
      },
      {
        id:"3",
        image: "https://app.imagineradio.io/media/album/art/default.jpg",
        brand:"Bata",
        date:"10-10-20",
        city:'Dhaka',
        title:"Dhaka -10-concert",
        details:" Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of  (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,  ",
        type:"concert"
      },
      {
        id:"4",
        image: "https://app.imagineradio.io/media/album/art/default.jpg",
        brand:"Bata",
        date:"20-10-20",
        city:'Dhaka',
        title:"Dhaka-20-concert",
        details:" Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of  (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,  ",
        type:"concert"
      },
      {
        id:"5",
        image: "https://app.imagineradio.io/media/album/art/default.jpg",
        date:"20-10-20",
        brand:"Bata",
        city:'Dhaka',
        title:"Dhaka-20-sports",
        details:" Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of  (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,  ",
        type:"sports"
      },
      {
        id:"6",
        image: "https://app.imagineradio.io/media/album/art/default.jpg",
        brand:"Samsung",
        city:'Khulna',
        date:"11-10-20",
        title:"Khulna-11-concert",
        details:" Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of  (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,  ",
        type:"concert"
      },
      {
        id:"7",
        image: "https://app.imagineradio.io/media/album/art/default.jpg",
        brand:"Samsung",
        city:'Khulna',
        date:"11-10-20",
        title:"Khulna -11-sports",
        details:" Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of  (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,  ",
        type:"sports"
      },
      {
        id:"8",
        image: "https://app.imagineradio.io/media/album/art/default.jpg",
        brand:"Apple",
        city:'Sylhet',
        date:"11-10-20",
        title:"Sylhet-11-party",
        details:" Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of  (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,  ",
        type:"party"
      },
      {
        id:"9",
        image: "https://app.imagineradio.io/media/album/art/default.jpg",
        brand:"Apple",
        city:'Sylhet',
        date:"20-10-20",
        title:"Sylhet-20-party",
        details:" Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of  (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,  ",
        type:"party"
      },
      {
        id:"10",
        image: "https://app.imagineradio.io/media/album/art/default.jpg",
        brand:"Apple",
        city:'Sylhet',
        date:"20-10-20",
        title:"Sylhet-20-meeting",
        details:" Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of  (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,  ",
        type:"meeting"
      },
      {
        id:"11",
        image: "https://app.imagineradio.io/media/album/art/default.jpg",
        brand:"Bata",
        date:"20-10-20",
        city:'Ctg',
        title:"Ctg-20-meeting",
        details:" Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of  (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,  ",
        type:"meeting"
      },
      {
        id:"12",
        image: "https://app.imagineradio.io/media/album/art/default.jpg",
        brand:"Bata",
        date:"10-10-20",
        city:'Ctg',
        title:"Ctg-20-meeting",
        details:" Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of  (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,  ",
        type:"meeting"
      },
      {
        id:"13",
        image: "https://app.imagineradio.io/media/album/art/default.jpg",
        brand:"Bata",
        date:"20-10-20",
        city:'Ctg',
        title:"Ctg-20-concert",
        details:" Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of  (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,  ",
        type:"concert"
      }
]

const dates=["20-10-20","10-10-20","11-10-20"]
const cities=["Dhaka","Khulna","Ctg","Sylhet"]
const types=["sports","concert","party","meeting"]

class SearchResult extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
      data:[],
      city:'',
      date:'',
      type:''
    };
  }

  componentDidMount(){
    this.setState({
      result:searchData,
      data:searchData
    })

  }
  filterData=()=>{
    const {city,date,type,result}=this.state
    console.log(city,date,type,result.length)
    let arr= result.filter(res=>res.city.toLowerCase().includes(city.toLowerCase())).filter(res=>res.date.toLowerCase().includes(date.toLowerCase())).filter(res=>res.type.toLowerCase().includes(type.toLowerCase()))
    this.setState({data:arr})
  }

  render(){
    const {city,date,type,data}=this.state

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <KeyboardAvoidingView
      style={styles.scrollView}
      >
          <View
          style={{
            flexDirection:'row',
            marginTop:10,
            height: window.width*55/375,
            justifyContent:'space-between',
            width:window.width,
            borderRadius:15,
            alignSelf:'center'
          }}
          >
            <View
            style={styles.pickerContainer}
            >
              <Text
              style={styles.pickerText}
              >Select city</Text>
            <Picker
              selectedValue={city}
              style={styles.pickerStyle}
              prompt="Select City"
              onValueChange={async (itemValue, itemIndex) =>this.setState({city:itemValue},this.filterData)}>
                <Picker.Item label={"All"} value={''} />
                {
                  cities.map(city=><Picker.Item label={city} value={city} />)
                }
            </Picker>
            </View>
            <View
            style={styles.pickerContainer}
            >
              <Text
              style={styles.pickerText}
              >Select Date</Text>
            <Picker
              selectedValue={date}
              style={styles.pickerStyle}
              prompt="Select Date"
              onValueChange={async (itemValue, itemIndex) =>this.setState({date:itemValue},this.filterData)}>
                <Picker.Item label={"All"} value={''} />
                {
                  dates.map(date=><Picker.Item label={date} value={date} />)
                }
            </Picker>
            </View>
            <View
            style={styles.pickerContainer}
            >
              <Text
              style={styles.pickerText}
              >Select Type</Text>
            <Picker
              selectedValue={type}
              style={styles.pickerStyle}
              prompt="Select Type"
              onValueChange={async (itemValue, itemIndex) =>this.setState({type:itemValue},this.filterData)}>
                <Picker.Item label={"All"} value={''} />
                {
                  types.map(type=><Picker.Item label={type} value={type} />)
                }
            </Picker>
            </View>
        </View>
        <FlatList
          data={data}
          contentContainerStyle={[GlobalStyles.spacer, SliderStyles.holderSH1]}
          ListFooterComponent={()=><View
          
          style={{
            height:120
          }}/>}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("EventDetails",{item})}
                style={{
                  width: window.width -40,
                  height: window.width * 80 / 375,
                  justifyContent: 'space-between',
                  marginVertical:10,
                  alignItems: 'flex-start',
                  marginHorizontal: 10,
                  backgroundColor:"#fff",
                  borderRadius:10,
                  borderBottomColor:"#415D94",
                  borderBottomWidth:1,
                  borderLeftColor:"#415D94",
                  borderLeftWidth:1,
                  flexDirection: 'row'
              }}
              >
                <View style={{
                  width: window.width * 70 / 375,
                  height: window.width * 70 / 375,
                  borderRadius: 5,
                  margin:5,
                  overflow: 'hidden',
              }}>
                  <Image
                    style={{
                      flex: 1,
                      width: undefined,
                      height: undefined,
                      resizeMode: 'cover',
                      borderRadius:8
                  }}
                    source={{uri:item.image}}
                  />
                </View>
                <View style={{
                  width: window.width -40,
                  height: window.width * 70 / 375,
                  justifyContent: 'flex-end',
                  alignItems: 'flex-start',
                  padding:5
                }}>
                    <Text style={[GlobalStyles.body2, GlobalStyles.light, GlobalStyles.leftTxt, {color: '#00102D'}]}>
                    {item.brand}
                    </Text>
                    <Text style={[GlobalStyles.caption, GlobalStyles.medium, GlobalStyles.leftTxt, {color: '#00102D'}]}
                    numberOfLines={1}>
                    {item.title}
                    </Text>
                </View>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item,index) => {
            return item.id.toString()+new Date().getMilliseconds().toString()+index.toString()}}
            />
        
        
      </KeyboardAvoidingView>
    </>
  );
  }
};

const styles = StyleSheet.create({
  pickerText:{
    fontSize:10,
    alignSelf:'center',
    marginTop:5
  },
  pickerContainer:{
    backgroundColor:'#fff',
    borderRadius:5,
    margin:5
  },
  pickerStyle:{
    height: 20,
    width: window.width/3.3
  },
  footerIcon: {
		width: window.height / 30,
		height: window.height / 30,
    margin:15
	},
  searchBar:{
    borderWidth: 1,
    borderColor: '#8d8d8d',
    borderRadius: 10,
  },
  txtInput: {
    ...systemWeights.light,
    color: '#616161',
    width: window.width*290/375,
    height: window.width*56/375,
    fontSize: 16,
    paddingLeft: window.width*28/375,
    marginVertical: 10,
    alignSelf:'center'
  },
  scrollView: {
    backgroundColor: "#EAECEE",
    height:window.height
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

export default SearchResult;
