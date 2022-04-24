import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import Setting from '../components/Setting'

const SettingsScreen = () => {
    const DATA = [
        {
            id: 1,
            icon: 'people',
            name: 'Account'
        },
        {
            id: 2,
            icon: 'people',
            name: 'Account'
        },
        {
            id: 3,
            icon: 'people',
            name: 'Account'
        },
        {
            id: 4,
            icon: 'people',
            name: 'Account'
        }
    ]
    const renderSetting = ({ item }) => {
        return (
            <Setting config={item} />
        )
    }
    return (
        <View style={styles.container}>
            <Text style={{ alignSelf: 'center', fontSize: 24, marginVertical: 10 }}>SettingsScreen</Text>
            <FlatList
                style={{ margin: 5 }}
                data={DATA}
                renderItem={renderSetting}
                keyExtractor={item => item._id} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 2,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        marginTop: 20
    },

});
export default SettingsScreen