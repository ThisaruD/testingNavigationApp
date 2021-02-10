import React from 'react'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from "../screens/homeScreen";
import Icon from "react-native-vector-icons/Ionicons";
import DetailsScreen from "../screens/detailsScreen";
import {createStackNavigator} from "@react-navigation/stack";
import ExploreScreen from "../screens/ExploreScreen";

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();


const Tab = createMaterialBottomTabNavigator();


const HomeStackScreen = ({navigation}) =>(
    <HomeStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:'#009387',

        },
        headerTintColor:'#fff',
        headerTitleStyle:{
            fontWeight:'bold'
        }
    }}>
        <HomeStack.Screen name="Home" component={HomeScreen} options={{
            title:'Overview',
            headerLeft:() => (
                <Icon.Button name="ios-menu"
                             size={25}
                             backgroundColor ="#009387"
                             onPress={() =>navigation.openDrawer()}>
                </Icon.Button>
            )
        }} />
    </HomeStack.Navigator>
);

const DetailsStackScreen = ({navigation}) =>(
    <DetailsStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:'#009387',
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
            fontWeight:'bold'
        }
    }}>
        <DetailsStack.Screen name="Details" component={DetailsScreen} option={{
        }}/>
    </DetailsStack.Navigator>
);



const MainTabScreen =() => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#fff"
            barStyle={{ backgroundColor: '#009387' }}
        >
            <Tab.Screen
                name="Home"
                component={HomeStackScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarColor:'#009387',
                    tabBarIcon: ({ color }) => (
                        <Icon name="ios-home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Details"
                component={DetailsStackScreen}
                options={{
                    tabBarLabel: 'Details',
                    tabBarColor:'#694fad',
                    tabBarIcon: ({ color }) => (
                        <Icon name="ios-notifications" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Explore"
                component={ExploreScreen}
                options={{
                    tabBarLabel: 'Explore',
                    tabBarIcon: ({ color }) => (
                        <Icon name="ios-person" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>


    );
}


export default MainTabScreen;



