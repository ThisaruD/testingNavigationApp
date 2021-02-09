import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "../screens/homeScreen";
import DetailsScreen from "../screens/detailsScreen";
import {createDrawerNavigator} from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

const AppNavigation = () =>{
    return(
        <NavigationContainer>
            {/*Rest of your app code*/}

            {/*<Stack.Navigator >*/}
            {/*    <Stack.Screen name="Home" component={HomeScreen} />*/}
            {/*    <Stack.Screen name="Details" component={DetailsScreen} />*/}

            {/*</Stack.Navigator>*/}




            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Details" component={DetailsScreen} />
            </Drawer.Navigator>

        </NavigationContainer>
    );

}

export default AppNavigation;
