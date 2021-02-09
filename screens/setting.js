import React from 'react';
import { StyleSheet, Text, View} from "react-native";




const Setting =({navigation})=> {
    return (
        <View style={styles.container}>
            <Text>This is setting screen</Text>
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


export default Setting;
