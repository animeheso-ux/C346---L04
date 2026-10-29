import {Image, Text, View} from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export const Boat = ({brandIcon,brandName,boatImage,description}) => {
    return (
        <View>
            <FontAwesome6 name={brandIcon} size={20}/>
            <Text>{brandName}</Text>
            <Text>{description}</Text>
            <Image source={boatImage} alt={brandName}/>
        </View>
    )
}