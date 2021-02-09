import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "../screens/homeScreen";
import DetailsScreen from "../screens/detailsScreen";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {createStackNavigator} from "@react-navigation/stack";
import Icon from 'react-native-vector-icons/Ionicons';



const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();


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







const AppNavigation = () =>{
    return(
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeStackScreen} />
                <Drawer.Screen name="Details" component={DetailsStackScreen} />
            </Drawer.Navigator>

        </NavigationContainer>




    );

}

export default AppNavigation;
