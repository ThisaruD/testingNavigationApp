import 'react-native-gesture-handler';
import * as React from 'react';
import {StyleSheet} from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
//import { createDrawerNavigator } from '@react-navigation/drawer';




import AppNavigation from "./navigation/AppNavigation";
import HomeScreen from "./screens/homeScreen";
import DetailsScreen from "./screens/detailsScreen";

//const Stack = createStackNavigator();
//const HomeStack = createStackNavigator();
//const DetailsStack = createStackNavigator();
//const Drawer = createDrawerNavigator();



// const HomeStackScreen = ({navigation}) =>(
//     <HomeStack.Navigator screenOptions={{
//         headerStyle:{
//             backgroundColor:'#009387',
//         },
//         headerTintColor:'#fff',
//         headerTitleStyle:{
//             fontWeight:'bold'
//         }
//     }}>
//         <HomeStack.Screen name="Home" component={HomeScreen} option={{
//             title:'Overview'
//         }}/>
//
//     </HomeStack.Navigator>
//
// );
//
// const DetailsStackScreen = ({navigation}) =>(
//     <DetailsStack.Navigator screenOptions={{
//         headerStyle:{
//             backgroundColor:'#009387',
//         },
//         headerTintColor:'#fff',
//         headerTitleStyle:{
//             fontWeight:'bold'
//         }
//     }}>
//         <DetailsStack.Screen name="Details" component={DetailsScreen} option={{
//
//         }}/>
//
//     </DetailsStack.Navigator>
//
// );



 const App = () => {
  return (

      // <NavigationContainer>
      //    {/*Rest of your app code*/}
      //
      //     {/*<Stack.Navigator >*/}
      //     {/*    <Stack.Screen name="Home" component={HomeScreen} />*/}
      //     {/*    <Stack.Screen name="Details" component={DetailsScreen} />*/}
      //
      //     {/*</Stack.Navigator>*/}
      //
      //
      //
      //
      //     <Drawer.Navigator initialRouteName="Home">
      //         <Drawer.Screen name="Home" component={HomeScreen} />
      //         <Drawer.Screen name="Details" component={DetailsScreen} />
      //     </Drawer.Navigator>
      //
      // </NavigationContainer>
      <AppNavigation/>
  );
}
export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});


// screenOptions={{
//     headerStyle:{
//         backgroundColor:'#009387',
//     },
//     headerTintColor:'#fff',
//         headerTitleStyle:{
//         fontWeight: 'bold'
//     }
// }}
