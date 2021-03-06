import React from "react";
import {StyleSheet,SafeAreaView,TouchableOpacity,Text,Dimensions} from "react-native"
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { createCompatNavigatorFactory, createSwitchNavigator } from '@react-navigation/compat';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './screens/App'
import Profile from './screens/Profile'
import Search from './screens/Search'
import Category from './screens/AllCategories'
import Login from './screens/Login'
import Signup from './screens/Signup'
import EditProfile from './screens/EditProfile'
import ProfileDetails from './screens/ProfileDetails'
import EventDetails from './screens/EventDetails'
import CategoryDetails from "./screens/CategoryDetails";
import SearchResult from "./screens/SearchResult";
import TicketDetails from "./screens/TicketDetails"
import Checkout from "./screens/Checkout"
import FastImage from "react-native-fast-image";
import ChangePassword from './screens/ChangePassword'

const window = Dimensions.get('window');

import iconHome from './assets/icons/iconHome.png';
import iconCategory from './assets/icons/iconCategory.png';
import iconProfile from './assets/icons/iconProfile.png';
import iconSearch from './assets/icons/iconSearch.png';
import AsyncStorage from "@react-native-community/async-storage";


function MyTabBar({ state,navigation }) {
	return (
    <SafeAreaView 
    style={styles.footer}
    >
			<TouchableOpacity
				
				style={styles.footerTab}
				onPress={() =>
					state.index==0?
					navigation.navigate("Home")
					:navigation.navigate("HomeStack")					
				}
			>
                  <FastImage
					style={styles.footerIcon}
					source={iconHome}
				/>
				<Text
					style={state.index==0?styles.activeTxt:styles.footerTxt}
				>
					Home
				</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={styles.footerTab}
				onPress={() =>
				state.index==1?
				navigation.navigate("Category")
				:navigation.navigate("CategoryStack")
			}
			>
                  <FastImage
					style={styles.footerIcon}
					source={iconCategory}
				/>
				<Text
					style={state.index==1?styles.activeTxt:styles.footerTxt}
				>
					Categories
				</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={styles.footerTab}
				onPress={() =>{
					AsyncStorage.getItem('userToken')
					.then(sesToken=>{
						if (sesToken){
							state.index==2?
							navigation.navigate("Profile")
							:navigation.navigate("ProfileStack")
						}
						else {
							navigation.navigate("AuthStack")
						}
					})
				}
				}
			>
                  <FastImage
					style={styles.footerIcon}
					source={iconProfile}
				/>
				<Text
					style={state.index==2?styles.activeTxt:styles.footerTxt}
				>
					Profile
				</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={styles.footerTab}
				onPress={() =>
					state.index==3?
					navigation.navigate("Search")
					:navigation.navigate("SearchStack")
				}
			>
                  <FastImage
					style={styles.footerIcon}
					source={iconSearch}
				/>
				<Text
					style={state.index==3?styles.activeTxt:styles.footerTxt}
				>
					Search
				</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
}

// three stacks under three tabs of app tab navigator
const HomeStack = createCompatNavigatorFactory(createStackNavigator)(
	{
		Home: { screen: Home, navigationOptions:{headerShown:false}  },
		EventDetails: { screen: EventDetails, navigationOptions:{headerShown:false}  },
		Checkout: { screen: Checkout, navigationOptions:{headerShown:false}  },
		TicketDetails: { screen: TicketDetails, navigationOptions:{headerShown:false}  },
		CategoryDetails: { screen: CategoryDetails, navigationOptions:{headerShown:false}  }

	},
	options
);

const ProfileStack = createCompatNavigatorFactory(createStackNavigator)(
	{
		Profile: { screen: Profile, navigationOptions:{headerShown:false}  },
		EventDetails: { screen: EventDetails, navigationOptions:{headerShown:false}  },
		TicketDetails: { screen: TicketDetails, navigationOptions:{headerShown:false}  },
		EditProfile: { screen: EditProfile, navigationOptions:{headerShown:false } },
		Checkout: { screen: Checkout, navigationOptions:{headerShown:false}  },
		ProfileDetails: { screen: ProfileDetails, navigationOptions:{headerShown:false } },
		ChangePassword: { screen: ChangePassword, navigationOptions:{headerShown:false}  },

	},
	options
);

const CategoryStack = createCompatNavigatorFactory(createStackNavigator)(
	{
		Category: { screen: Category, navigationOptions:{headerShown:false}  },
		EventDetails: { screen: EventDetails, navigationOptions:{headerShown:false}  },
		TicketDetails: { screen: TicketDetails, navigationOptions:{headerShown:false}  },
		Checkout: { screen: Checkout, navigationOptions:{headerShown:false}  },
		CategoryDetails: { screen: CategoryDetails, navigationOptions:{headerShown:false}  }
	},
	options
);

const SearchStack = createCompatNavigatorFactory(createStackNavigator)(
	{
		Search: { screen: Search, navigationOptions:{headerShown:false}  },
		EventDetails: { screen: EventDetails, navigationOptions:{headerShown:false}  },
		TicketDetails: { screen: TicketDetails, navigationOptions:{headerShown:false}  },
		Checkout: { screen: Checkout, navigationOptions:{headerShown:false}  },
		SearchResult: { screen: SearchResult, navigationOptions:{headerShown:false}  }
	},
	options
);

const Tab = createBottomTabNavigator();

// App Tab navigator
function HomeContainer() {
    return (
      <Tab.Navigator screenOptions={options} 
      tabBar={props => <MyTabBar {...props} />}
      >
          <Tab.Screen name="HomeStack" component={HomeStack} />
          <Tab.Screen name="CategoryStack" component={CategoryStack} />
          <Tab.Screen name="ProfileStack" component={ProfileStack}/>
          <Tab.Screen name="SearchStack" component={SearchStack} />
        </Tab.Navigator>
    );
  }

// pass screen props to home navigator
function Home_Navigation({navigation}){
    return <HomeContainer screenProps={{ rootNavigation: navigation }} />
}

const appRoutes = {
    Home_Navigation: { screen: Home_Navigation, navigationOptions:{headerShown:false} }
};

const AppStack = createCompatNavigatorFactory(createStackNavigator)(appRoutes, options);

const options = {
  cardStyle: {
    backgroundColor: "#fff"
  },
  navigationOptions: {
    gesturesEnabled: true
  }
};
const AuthStack = createCompatNavigatorFactory(createStackNavigator)(
	{
	  Login: { screen: Login },
	  Signup: { screen: Signup }
	},
	{
	  headerMode: "none"
	}
  );
const AppNavigator = createSwitchNavigator(
    {
        AppStack,
        AuthStack
    },
    {
      initialRouteName: "AppStack",
      headerMode: 'none'
    }
  )

export default function Routes(){
    return (
        <NavigationContainer><AppNavigator/></NavigationContainer>
    )
}
const styles = StyleSheet.create({
	footer: {
    width: window.width,
    paddingHorizontal:10,
    height: window.width * 75.5 / 375,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: '#00163D',
		borderTopWidth: 0.5,
		borderTopColor: '#cfcfcf',
		shadowColor: 'rgba(0, 0, 0, 0.25)',
		shadowOffset: {width: 0, height: -4},
		shadowOpacity: 1,
		shadowRadius: 4,
		elevation: 9,
	},
	footerTab: {
    width: window.width / 6.5,
		height: window.width / 6.5,
    justifyContent: 'center',
		alignItems: 'center',
    backgroundColor: '#323E55',
    borderRadius:10
	},
	activeTab: {
		width: window.width / 4,
		height: window.height / 12,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#FF0000'
	},
	footerIcon: {
		width: window.height / 45,
		height: window.height / 45,
		marginBottom: 5
	},
	footerTxt: {
		fontSize: 8,
		color: '#fff'
	},
	activeTxt: {
		fontSize: 8,
		fontWeight: 'bold',
		color: '#00163D'
	},
	countHolder: {
		width: window.height / 20,
		height: window.height / 20,
		borderRadius: window.height / 40,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff000',
		position: 'absolute',
		right: 1,
		top: 1
	},
	messageCount: {
		color: '#333',
		fontSize: 12,
		fontWeight: 'bold'
	}
});