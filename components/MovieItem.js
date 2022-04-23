import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { borderColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'
import { useNavigation } from "@react-navigation/native";
const MovieItem = (props) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("Pelicula", { movie: props.movie })}>
            <Image
                style={styles.tinyLogo}
                source={{
                    uri: props.movie.image,
                }} />
            <View style={styles.container2}>
                <Text style={styles.text}>
                    {props.movie.title}
                </Text>
                <Text allowFontScaling style={styles.text} numberOfLines={2} ellipsizeMode="head" >{props.movie.description}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 10,
        marginHorizontal: 5,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 9
    },
    container2: {
        justifyContent: 'center',
        paddingEnd: 70
    },
    text: {
        marginEnd: 2
    },
    tinyLogo: {
        width: 80,
        height: 90,
        margin: 5
    },

})
export default MovieItem