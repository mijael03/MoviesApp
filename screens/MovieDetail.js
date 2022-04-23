import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'

const MovieDetail = ({ navigation, route }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const task = route.params.movie
        navigation.setOptions({ headerTitle: task.titleOriginal })
        setData(task)
    })
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{data.title}</Text>
            <Image
                style={styles.tinyLogo}
                source={{ uri: data.image }} />
            <Text>{data.description}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 8,
        backgroundColor: 'paleturquoise'
    },
    container2: {
        justifyContent: 'center',
        paddingEnd: 70
    },
    title: {
        alignSelf: 'center',
        fontSize: 20
    },
    text: {
        marginEnd: 2
    },
    tinyLogo: {
        alignSelf: 'center',
        width: 200,
        height: 250,
        margin: 5
    },

})
export default MovieDetail