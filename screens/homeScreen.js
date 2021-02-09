import React from 'react'
import {Button, StyleSheet, Text, View} from "react-native";


const HomeScreen=({navigation})=> {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button title="Go to details screen" onPress={()=> navigation.navigate('Details')}/>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});



export default HomeScreen;
