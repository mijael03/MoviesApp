import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
const Setting = (props) => {
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <Ionicons name={props.config.icon} size={32} color="black" />
                <Text style={styles.text}>{props.config.name}</Text>
                <Ionicons style={styles.iconend} name="caret-forward" size={32} color="black" />
            </View>
            <View style={{ flex: 1, height: 1, backgroundColor: 'gray' }} />
        </TouchableOpacity>

    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: '#ecf0f1',

        marginHorizontal: 5,
        padding: 5
    },
    text: {
        paddingStart: 10,
    },



});
export default Setting