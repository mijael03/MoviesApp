import { NavigationRouteContext } from '@react-navigation/native';
import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import { useNavigation } from "@react-navigation/native";
export default function Login() {
    const navigation = useNavigation();
    const [text, onChangeText] = React.useState("User");
    const [password, onChangePassword] = React.useState('Password')
    const handleSubmit = () => {
        if (text == 'user' && password == 'password') {
            navigation.navigate('Settings')
        } else {
            showToast(false)
        }
    }
    const showToast = (logued) => {
        ToastAndroid.show(logued ? 'You are logued' : 'Incorrect!!!', ToastAndroid.SHORT);
    }
    return (
        <View style={styles.container}>
            <Text style={styles.paragraph}>Inicie Sesion</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text} />
            <TextInput
                style={styles.input}
                onChangeText={onChangePassword}
                value={password} />
            <TouchableOpacity
                style={styles.submit}
                onPress={handleSubmit}>
                <Text>SUBMIT</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 10,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    input: {
        margin: 5,
        borderWidth: 1,
        borderRadius: 7,
        padding: 5
    },
    submit: {
        alignSelf: 'center',
        backgroundColor: 'cornflowerblue',
        margin: 10,
        padding: 8,
        borderRadius: 8
    }
});