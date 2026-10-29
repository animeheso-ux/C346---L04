import {Image, StyleSheet, Text, View} from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export const Boat = ({brandIcon,brandName,boatImage,description}) => {
    return (
        <View>
            <FontAwesome6 name={brandIcon} size={20} color={`rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},0)`}/>
            <Text style={styles.MainHeader}>{brandName}</Text>
            <Text>{description}</Text>
            <Image source={boatImage} alt={brandName}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    MainHeader : {
        fontSize : 25
    }
});