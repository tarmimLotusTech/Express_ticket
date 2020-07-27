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
  TouchableOpacity,
  ActivityIndicator,
  TextInput
} from 'react-native';
const window = Dimensions.get('window');
import { 
  systemWeights
} from 'react-native-typography';
import SliderStyles from '../styles/SliderStyles';
import GlobalStyles from '../styles/Styles';
import {Picker} from '@react-native-community/picker';
import { BaseUrl } from "../env";

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import FetchService from '../services/FetchService';

const dates=["20-10-20","10-10-20","11-10-20"]
const cities=["Dhaka","Khulna","Ctg","Sylhet"]
const types=["sports","concert","party","meeting"]

class SearchResult extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
      data:[],
      selectedCategory:'',
      categories:[],
      venue:'',
      city:'',
      date:'',
      type:'',
      loading:true
    };
  }

  componentDidMount(){
    FetchService("GET",`/api/search?query=${this.props.navigation.state.params.item}`)
    .then(res=>{
      this.setState({
        result:res.data,
        data:res.data
      })
      FetchService("GET","/api/category")
      .then(res=>this.setState({
        categories:res.data,
        loading:false
      }))
    })
  }
  filterData=()=>{
    const {date,result,selectedCategory,venue}=this.state
    console.log(venue)
    // console.log(city,date,type,result.length)
    let arr= result.filter(res=>res.primaryCategory.includes(selectedCategory)).filter(res=>res.venue? res.venue.includes(venue):false)
    // .filter(res=>res.date.toLowerCase().includes(date.toLowerCase())).filter(res=>res.type.toLowerCase().includes(type.toLowerCase()))
    this.setState({
      data:
      venue==''?
      result:
      arr
    })
  }
  filterVenue=(venue)=>{
    this.setState({venue})
    const {date,result,selectedCategory}=this.state
    console.log(venue)
    // console.log(city,date,type,result.length)
    let arr= result.filter(res=>res.primaryCategory.includes(selectedCategory)).filter(res=>res.venue? res.venue.includes(venue.toLowerCase()):false)
    // .filter(res=>res.date.toLowerCase().includes(date.toLowerCase())).filter(res=>res.type.toLowerCase().includes(type.toLowerCase()))
    this.setState({
      data:
      venue==''?
      result:
      arr
    })
  }

  render(){
    const {city,date,type,data,categories,selectedCategory,venue}=this.state
  if (this.state.loading)
  return <ActivityIndicator/>
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
              >Select Category</Text>
            <Picker
              selectedValue={selectedCategory}
              style={styles.pickerStyle}
              prompt="Select Category"
              onValueChange={async (itemValue, itemIndex) =>this.setState({selectedCategory:itemValue},this.filterData)}>
                <Picker.Item label={"All"} value={''} />
                {
                  categories.map(category=><Picker.Item label={category.name} value={category._id} />)
                }
            </Picker>
            </View>
            <TextInput
              // underlineColorAndroid="#8d8d8d"
              placeholderTextColor="#212121"
              placeholder="Search venue"
              value={venue}
              keyboardType="default"
              style={{
                ...systemWeights.light,
                backgroundColor:'#fff',
                borderRadius:5,
                margin:5,
                height: window.height/15,
                width: window.width/3.3,
                fontSize: 10,
                paddingLeft: window.width*20/375,
                // marginTop: 70,
                // borderWidth:1,
              }}
              onChangeText={txt=>this.filterVenue(txt)}
              blurOnSubmit={false}
            />
            {/* <View
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
            </View> */}
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
                onPress={() => this.props.navigation.navigate("EventDetails",{id:item._id})}
                style={{
                  width: window.width -40,
                  height: window.width * 80 / 375,
                  justifyContent: 'space-between',
                  marginVertical:10,
                  alignItems: 'flex-start',
                  marginHorizontal: 10,
                  backgroundColor:"#fff",
                  borderRadius:10,
                  elevation:5,
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
                    source={{uri:BaseUrl+item.cover.full}}
                  />
                </View>{
                  console.log(item)
                }
                <View style={{
                  width: window.width -40,
                  height: window.width * 70 / 375,
                  justifyContent: 'flex-end',
                  alignItems: 'flex-start',
                  padding:5
                }}>
                    <Text style={[GlobalStyles.caption, GlobalStyles.medium, GlobalStyles.leftTxt, {color: '#00163D'}]}
                    numberOfLines={1}>
                    {item.name}
                    </Text>
                    <Text style={[GlobalStyles.body2, GlobalStyles.light, GlobalStyles.leftTxt, {color: '#00163D'}]}>
                    organiser: {item.brand}
                    </Text>
                    <View
                    style={{
                      flexDirection:'row'
                    }}
                    >
                    <Text style={[GlobalStyles.body2, GlobalStyles.light, GlobalStyles.leftTxt, {color: '#00163D'}]}>
                    {item.date}{'  '}
                    </Text>
                    <Text style={[GlobalStyles.body2, GlobalStyles.light, GlobalStyles.leftTxt, {color: '#00163D'}]}>
                    venue: {item.venue}
                    </Text>
                    </View>
                </View>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item,index) => {
            return item._id.toString()+new Date().getMilliseconds().toString()+index.toString()}}
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
