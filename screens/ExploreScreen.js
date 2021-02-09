import React from "react";
import {View, Text, StyleSheet} from "react-native";


const ExploreScreen = () =>{
    return(
        <View style={styles.container}>
            <Text >This is explore screen</Text>
        </View>
    );

}

export default ExploreScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

});
