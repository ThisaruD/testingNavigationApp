import React from 'react';
import { StyleSheet, Text, View} from "react-native";




const About =({navigation})=> {
    return (
        <View style={styles.container}>
            <Text>This is about screen</Text>
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


export default About;
