import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Touchable,
  Linking,
} from "react-native";
import React from "react";
import { Link, useNavigation } from "expo-router";
import FontAwesome from "@expo/vector-icons/build/FontAwesome";

const GPS = () => {
  const navigation = useNavigation();
  const PHais140 = () => {
    console.log("nav to AIS140 ");
    navigation.navigate("(GPS)");
  };
  const PHnonais = () => {
    console.log("nav to Non-AIS ");
    navigation.navigate("(GPS)");
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.tile} onPress={PHais140}>
        <Image
          source={require("../../assets/AIS140.png")}
          style={styles.gpsImage}
        />
        <View>
          <Text>AIS 140</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tile} onPress={PHnonais}>
        <Image
          source={require("../../assets/AIS140.png")}
          style={styles.gpsImage}
        />
        <View>
         
          <Text>Non-AIS</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default chats