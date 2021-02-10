import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createDrawerNavigator} from "@react-navigation/drawer";

import MainTabScreen from "./MainTabScreen";
import About from "../screens/about";

const Drawer = createDrawerNavigator();


const AppNavigation = () =>{
    return(
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={MainTabScreen} />
                {/*<Drawer.Screen name="Details" component={DetailsStackScreen} />*/}
                <Drawer.Screen name="About" component={About} />
            </Drawer.Navigator>

        </NavigationContainer>
    );
}

export default AppNavigation;
