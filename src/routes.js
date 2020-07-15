import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { createCompatNavigatorFactory, createSwitchNavigator } from '@react-navigation/compat';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './screens/App'
import Profile from './screens/App'
import Search from './screens/App'
import Category from './screens/App'
import Login from './screens/Login'
import EventDetails from './screens/App'

// three stacks under three tabs of app tab navigator
const HomeStack = createCompatNavigatorFactory(createStackNavigator)(
	{
		Home: { screen: Home, navigationOptions:{headerShown:false}  },
		EventDetails: { screen: EventDetails, navigationOptions:{headerShown:false}  }
	},
	options
);

const ProfileStack = createCompatNavigatorFactory(createStackNavigator)(
	{
		Search: { screen: Profile, navigationOptions:{headerShown:false}  },
		EventDetails: { screen: EventDetails, navigationOptions:{headerShown:false}  }
	},
	options
);

const CategoryStack = createCompatNavigatorFactory(createStackNavigator)(
	{
		Category: { screen: Category, navigationOptions:{headerShown:false}  },
		EventDetails: { screen: EventDetails, navigationOptions:{headerShown:false}  }
	},
	options
);

const SearchStack = createCompatNavigatorFactory(createStackNavigator)(
	{
		Search: { screen: Search, navigationOptions:{headerShown:false}  },
		EventDetails: { screen: EventDetails, navigationOptions:{headerShown:false}  }
	},
	options
);

const Tab = createBottomTabNavigator();

// App Tab navigator
function HomeContainer() {
    return (
      <Tab.Navigator screenOptions={options} tabBarOptions={
        {
          activeTintColor:'red',
          activeBackgroundColor:'#bdc3c7',
          labelStyle:{
              fontSize:20,
              fontWeight:'bold',
              marginBottom:10 
            }
        }
      }
      >
          <Tab.Screen name="Home" component={HomeStack} />
          <Tab.Screen name="category" component={CategoryStack} />
          <Tab.Screen name="Profile" component={ProfileStack}/>
          <Tab.Screen name="Search" component={SearchStack} />
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

const AppNavigator = createSwitchNavigator(
    {
        AppStack,
        Login
    },
    {
      initialRouteName: "Login",
      headerMode: 'none'
    }
  )

export default function Routes(){
    return (
        <NavigationContainer><AppNavigator/></NavigationContainer>
    )
}